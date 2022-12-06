import GlobalStyles from "../src/styles/globalStyle";
import theme from "../src/styles/theme";
import { ThemeProvider } from "styled-components";
import { MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';
import { ChakraProvider } from "@chakra-ui/react";

const customViewports = {
    motoG4: {
        name: 'Moto G4',
        styles: {
            width: '360px',
            height: '640px',
        },
    },
    width900: {
        name: 'Width 900',
        styles: {
            width: '900px',
            height: '963px',
        },
    },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
    chakra: {
    theme,
  },
}

export const decorators = [
  (Story) => (
      <ChakraProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Story />
      </ThemeProvider>
      </ChakraProvider>
  ),
];
