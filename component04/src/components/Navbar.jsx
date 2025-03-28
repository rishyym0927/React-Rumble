import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>My Website</h1>
      </div>
      <div className="navbar-links">
        <button className="theme-switcher" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
