import React, { useState } from 'react';
import './App.css';
import DynamicTable from './DynamicTable';

// Navigation Bar Component
const Navbar = ({ toggleTheme, theme }) => {
  return (
    <nav className="navbar">
      <h1>Dynamic Table Demo</h1>
      <div>
        <button className="theme-button" onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </div>
    </nav>
  );
};

// App Component
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <header className="header">
        <h1 className="title">Dynamic Table with CSV Import, Sort, and Search</h1>
        <DynamicTable />
      </header>
    </div>
  );
}

export default App;
