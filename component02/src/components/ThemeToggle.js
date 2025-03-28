import { useContext } from "react";
import { ThemeContext } from "../../../component01/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🌑 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
