import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Accordion from './components/Accordion';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <div className="container">
        <h1 className="title">FAQ Section📑</h1>
        <Accordion />
      </div>
    </div>
  );
}

export default App;
