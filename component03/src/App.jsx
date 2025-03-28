import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DynamicTable from "./components/DynamicTable";
import "./App.css"; // Ensure styling is included

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <Router>
      <div className={`app-container ${darkMode ? "dark" : ""}`}>
        {/* Navigation Bar */}
        <nav className="navbar">
          <div className="nav-links">
            <Link to="/" className="nav-item">🏠 Home</Link>
            <Link to="/about" className="nav-item">ℹ️ About</Link>
            <Link to="/table" className="nav-item">📊 Data Table</Link>
          </div>
          <button className="dark-mode-btn" onClick={toggleDarkMode}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </nav>

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/table" element={<DynamicTable />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
