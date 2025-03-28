import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

const HomePage = () => <div>This has Home Page Content</div>;
const AboutPage = () => <div>This About Page Content</div>;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the theme from local storage on component mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Update the theme in local storage whenever it changes
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </nav>
          <button onClick={toggleTheme} className="theme-toggle-button">
            Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
          </button>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
