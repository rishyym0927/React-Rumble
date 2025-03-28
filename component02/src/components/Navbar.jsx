import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-900 shadow-md">
      <div className="flex space-x-6">
        <Link to="/" className="text-gray-900 dark:text-white font-semibold">🏠 Home</Link>
        <Link to="/about" className="text-gray-900 dark:text-white font-semibold">📖 About</Link>
      </div>
      <button
        className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white font-bold"
        onClick={toggleTheme}
      >
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
}
