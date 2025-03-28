import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      {isDarkMode ? "☀️" : "🌙"}
    </button>
  );
}
