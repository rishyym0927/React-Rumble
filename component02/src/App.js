import React from "react";
import { ThemeProviderWrapper } from "./context/ThemeContext";
import { GlobalStyle } from "./styles/GlobalStyles";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <ThemeProviderWrapper>
      <GlobalStyle />
      <AppRouter />
    </ThemeProviderWrapper>
  );
};

export default App;
