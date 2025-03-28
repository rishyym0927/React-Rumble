import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ theme, toggleTheme }) {
  return (
    <header className="app-header">
      <nav className="navbar">
        <h1 className="logo">My Website</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <button onClick={toggleTheme} className="theme-switcher">
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </nav>
    </header>
  );
}

export default Header;
