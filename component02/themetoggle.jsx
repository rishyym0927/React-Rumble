import React from "react";
import "./ThemeToggle.css";

function ThemeToggle({ theme, setTheme }) {
  return (
    <button className="toggle-btn" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}

export default ThemeToggle;
