import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClientComponent } from "@ribon.io/shared/dist/hooks";
import RoutesComponent from "config/routes";
import GlobalStyle from "./styles/globalStyle";
import ModalProvider from "./contexts/modalContext";
import theme from "./styles/theme";

function App() {
  return (
    <QueryClientComponent>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <GlobalStyle />
          <BrowserRouter>
            <RoutesComponent />
          </BrowserRouter>
        </ModalProvider>
      </ThemeProvider>
    </QueryClientComponent>
  );
}

export default App;
