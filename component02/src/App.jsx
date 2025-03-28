// App.jsx
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';

function App() {
  const { theme } = useContext(ThemeContext);

  // Apply the .dark or .light class to <html>
  useEffect(() => {
    console.log('Theme changed to:', theme); // Debug log
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
