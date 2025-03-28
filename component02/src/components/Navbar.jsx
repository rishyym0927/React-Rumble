import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">MyApp</Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}