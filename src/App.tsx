import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import RoutesComponent from "config/routes";
import GlobalStyle from "./styles/globalStyle";
import ModalProvider from "./contexts/modalContext";
import theme from "./styles/theme";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ModalProvider>
          <GlobalStyle />
          <BrowserRouter>
            <RoutesComponent />
          </BrowserRouter>
        </ModalProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
