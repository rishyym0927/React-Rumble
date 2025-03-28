import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  text: "#000",
  navbar: "#f0f0f0",
  buttonBg: "#000",
  buttonText: "#fff",
};

export const darkTheme = {
  body: "#121212",
  text: "#fff",
  navbar: "#222",
  buttonBg: "#fff",
  buttonText: "#000",
};

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: all 0.3s ease-in-out;
  }
`;
