import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Arial", sans-serif;
    margin: 0;
    padding: 0;
    background: ${({ theme }) => (theme === "dark" ? "#222" : "#fff")};
    color: ${({ theme }) => (theme === "dark" ? "#fff" : "#000")};
  }
  nav {
    display: flex;
    gap: 20px;
    padding: 10px;
    background: #007bff;
  }
  nav a {
    color: white;
    text-decoration: none;
  }
`;

export default GlobalStyles;
