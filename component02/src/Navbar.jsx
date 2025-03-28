import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ padding: "10px", textAlign: "center", background: theme === "light" ? "#ddd" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <Link to="/" style={{ margin: "10px", color: theme === "light" ? "#000" : "#fff" }}>Home</Link>
      <Link to="/about" style={{ margin: "10px", color: theme === "light" ? "#000" : "#fff" }}>About</Link>
      <button onClick={toggleTheme} style={{ marginLeft: "10px", padding: "5px" }}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
