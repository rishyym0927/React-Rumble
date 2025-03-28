import React, { useState, useEffect } from "react";

const App = () => {
  // Load theme from localStorage or default to light mode
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  // Apply theme to <body> tag and store preference
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="container">
      <h1>Dark/Light Mode Toggle</h1>
      <div className="theme-switch" onClick={toggleTheme}>
        <div className="theme-switch-circle"></div>
      </div>
      <p>Click the switch to toggle between dark and light mode.</p>
    </div>
  );
};

export default App;
