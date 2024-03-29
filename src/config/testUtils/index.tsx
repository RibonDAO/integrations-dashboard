import React from "react";
import {
  act,
  fireEvent,
  render,
  RenderResult,
  screen,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import ModalProvider, {
  IModalContext,
  ModalContext,
} from "contexts/modalContext";
import { createMemoryHistory, MemoryHistory } from "history";
import { Router } from "react-router-dom";
import theme from "styles/theme";
import { I18nextProvider } from "react-i18next";
import i18n from "i18n-test";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  renderHook as renderTestingLibraryHook,
  RenderHookResult,
} from "@testing-library/react-hooks";

export interface RenderWithContextResult {
  component: RenderResult;
  history: MemoryHistory;
}

function renderProvider(
  RProvider: any,
  RContext: React.Context<any>,
  value: Record<any, any>,
  children: JSX.Element,
) {
  return (
    <RProvider>
      <RContext.Consumer>
        {(val: Record<any, any>) => (
          <RContext.Provider
            // eslint-disable-next-line react/jsx-no-constructed-context-values
            value={{
              ...val,
              ...value,
            }}
          >
            {children}
          </RContext.Provider>
        )}
      </RContext.Consumer>
    </RProvider>
  );
}

export type RenderComponentProps = {
  history?: MemoryHistory;
  modalProviderValue?: Partial<IModalContext>;
  locationState?: Record<any, any>;
};

function renderAllProviders(
  children: any,
  {
    history = createMemoryHistory(),
    modalProviderValue = {},
    locationState = {},
  }: RenderComponentProps = {},
) {
  const queryClient = new QueryClient();
  const historyObject = {
    ...history,
    location: { ...history.location, ...locationState },
  };
  historyObject.location.state = locationState;

  return {
    component: (
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <I18nextProvider i18n={i18n}>
            <Router location={locationState} navigator={historyObject}>
              {renderProvider(
                ModalProvider,
                ModalContext,
                modalProviderValue,
                children,
              )}
            </Router>
          </I18nextProvider>
        </QueryClientProvider>
      </ThemeProvider>
    ),
    history: historyObject,
  };
}

export function renderComponent(
  component: JSX.Element,
  renderComponentProps: RenderComponentProps = {},
): RenderWithContextResult {
  const { component: componentWithProviders, history } = renderAllProviders(
    component,
    renderComponentProps,
  );
  return {
    component: render(componentWithProviders),
    history,
  };
}

type RenderHookReturn = {
  hook: RenderHookResult<any, any>;
  history: MemoryHistory;
};

export async function waitForPromises() {
  // eslint-disable-next-line no-promise-executor-return
  await act(() => new Promise((resolve) => setTimeout(resolve, 0)));
}

export function renderHook(
  hook: (props: any) => any,
  renderComponentProps: RenderComponentProps = {},
): RenderHookReturn {
  let history = createMemoryHistory();
  const wrapper = ({ children }: any) => {
    const { component, history: historyObject } = renderAllProviders(
      children,
      renderComponentProps,
    );
    history = historyObject;
    return component;
  };

  return {
    hook: renderTestingLibraryHook(hook, { wrapper }),
    history,
  };
}

export function clickOn(textOrComponent: string | any) {
  if (typeof textOrComponent === "string") {
    return fireEvent.click(screen.getByText(textOrComponent));
  }

  return fireEvent.click(textOrComponent);
}
