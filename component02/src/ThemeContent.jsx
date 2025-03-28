import React, { createContext, useState, useEffect, useContext } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

// Define light and dark themes
const lightTheme = {
  background: "#ffffff",
  color: "#000000",
};

const darkTheme = {
  background: "#121212",
  color: "#ffffff",
};

// Create context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;
  });

  const [flashWhite, setFlashWhite] = useState(false);

  // Function to toggle theme
  const toggleTheme = () => {
   

    setTimeout(() => {
      setTheme((prevTheme) => {
        const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme;
        localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
        return newTheme;
      });
      setFlashWhite(false);
    }, 300); // Adjust timing for smoother transition
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {flashWhite ? <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", background: "#fff", zIndex: 9999 }}></div> : children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => useContext(ThemeContext);
