import React, { useEffect, useState } from "react";
import "../styles/theme.css"; // Import theme styles

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-theme", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  // Apply Theme on Load
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    }
  }, [isDarkMode]);

  return (
    <button onClick={toggleTheme} className="theme-button">
      {isDarkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
