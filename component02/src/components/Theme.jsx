import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "10px 16px",
        fontSize: "16px",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        backgroundColor: theme === "light" ? "#007bff" : "#ff4081",
        color: theme === "light" ? "#ffffff" : "#1a1a1a",
        transition: "background-color 0.3s ease"
      }}
    >
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
}
