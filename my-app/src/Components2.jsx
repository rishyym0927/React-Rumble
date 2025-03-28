import React, { useState, createContext, useContext, useEffect } from "react";
import ReactDOM from "react-dom";

// Theme Context for global theme management
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.style.backgroundColor = savedTheme === "light" ? "#fff" : "#000";
  }, []);

  // Save theme to localStorage and update background color
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#000";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to access the Theme Context
const useTheme = () => useContext(ThemeContext);

// Theme Switcher Component
const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "5px",
        border: "none",
        backgroundColor: theme === "light" ? "#007bff" : "#333",
        color: theme === "light" ? "#fff" : "#ccc",
        marginBottom: "20px",
      }}
      onClick={toggleTheme}
    >
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

// Page1 Component
const Page1 = () => {
  const { theme } = useTheme();
  return (
    <div style={{ padding: "20px", color: theme === "light" ? "#000" : "#fff" }}>
      <h1>Page 1</h1>
      <p>The current theme is {theme} mode.</p>
    </div>
  );
};

// Page2 Component
const Page2 = () => {
  const { theme } = useTheme();
  return (
    <div style={{ padding: "20px", color: theme === "light" ? "#000" : "#fff" }}>
      <h1>Page 2</h1>
      <p>The current theme is {theme} mode.</p>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentPage, setCurrentPage] = useState("Page1");

  return (
    <ThemeProvider>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <ThemeSwitcher />
        <div style={{ margin: "20px" }}>
          <button onClick={() => setCurrentPage("Page1")}>Go to Page 1</button>
          <button onClick={() => setCurrentPage("Page2")}>Go to Page 2</button>
        </div>
        {currentPage === "Page1" ? <Page1 /> : <Page2 />}
      </div>
    </ThemeProvider>
  );
};

// Render Application
export default App;