import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">Theme Switcher!</Link>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="nav-theme">
        <ThemeToggle />
      </div>
    </nav>
  );
}
