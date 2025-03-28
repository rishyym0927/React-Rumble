import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/theme.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">🏡 Home</Link>
          <Link to="/about">ℹ️ About</Link>
          <ThemeToggle />
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
