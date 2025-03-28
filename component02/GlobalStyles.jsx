import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg-color: ${({ theme }) => (theme === "dark" ? "#222" : "#fff")};
    --text-color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s, color 0.3s;
  }
`;
