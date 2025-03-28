import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

function Navbar({ theme, setTheme }) {
  return (
    <nav className="navbar">
      <h1>🌗 Theme Switcher</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  );
}

export default Navbar;
