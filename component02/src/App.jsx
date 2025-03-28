import React, { useState, useEffect } from 'react';
import './App.css';  

function App() {
  
  const storedTheme = localStorage.getItem('theme');
  const [isDarkMode, setIsDarkMode] = useState(storedTheme ? storedTheme === 'dark' : false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.body.className = isDarkMode ? 'dark' : 'light'; 
  }, [isDarkMode]);

  return (
    <div className="App">
     
      <button className="theme-toggle-button" onClick={toggleTheme}>
        {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>

      
      <div style={{ textAlign: 'center', paddingTop: '100px' }}>
        <h1>Welcome to the React-Rumble Toggle</h1>
        <p>Click the button above to toggle between dark and light modes.</p>
      </div>
    </div>
  );
}

export default App;
