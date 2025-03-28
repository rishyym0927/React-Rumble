import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar">
      <h2>🔥 React Multi-Page</h2>
      <div>
        <Link to="/">🏠 Home</Link>
        <Link to="/about">ℹ️ About</Link>
        <Link to="/contact">📞 Contact</Link>
        <button className="toggle-btn" onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
