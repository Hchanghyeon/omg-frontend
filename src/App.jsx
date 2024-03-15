import { ThemeProvider } from "styled-components";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { theme } from "./styles/theme";
import GlobalStyle from "./styles/globalStyle";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
          <RouterProvider router={router}/>
          <GlobalStyle></GlobalStyle>
    </ThemeProvider>
  );
}

export default App;
