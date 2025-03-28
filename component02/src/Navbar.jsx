// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav style={navStyle}>
      <div style={brandStyle}>My Website</div>
      <ul style={ulStyle}>
        <li>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>About</Link>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}

// Notice we use var(--bg-color) so it changes with the theme
const navStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1rem',
  backgroundColor: 'var(--bg-color)', // changed from #ccc to dynamic
  borderBottom: '1px solid var(--text-color)',
};

const brandStyle = {
  fontWeight: 'bold',
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
  gap: '1rem',
  margin: 0,
  padding: 0,
};

const linkStyle = {
  textDecoration: 'none',
  color: 'var(--text-color)',
};
