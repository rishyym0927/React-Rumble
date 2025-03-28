import { createGlobalStyle, ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease-in-out;
  }
`;

const lightTheme = {
  body: "#ffffff",
  text: "#000000"
};

const darkTheme = {
  body: "#121212",
  text: "#ffffff"
};

export default function ThemeSwitcher({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme === darkTheme ? "dark" : "light");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header style={{ position: "fixed", top: 0, right: 0, width: "calc(100% - 32px)", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", backgroundColor: theme.body, color: theme.text }}>
        <h2>Theme Switcher Example</h2>
        <div style={{ display: "flex", gap: "16px" }}>
            <button>
                <Link style={{color: theme === lightTheme ? theme.body : "#fff"}} to={"/"}>Home</Link>
            </button>
            <button>
                <Link style={{color: theme === lightTheme ? theme.body : "#fff"}} to={"/home"}>About</Link>
            </button>
            <button onClick={toggleTheme}>
                {theme === lightTheme ? "🌑 Dark Mode" : "☀️ Light Mode"}
            </button>
        </div>
      </header>
      {children}
    </ThemeProvider>
  );
}
