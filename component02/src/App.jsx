import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ThemeToggle from "./Components/ThemeToggle";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import "./App.css";

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        document.body.classList.toggle("dark", isDarkMode);
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    return (
        <Router>
            <div className="app">
                <Navbar />
                <ThemeToggle toggleTheme={() => setIsDarkMode(!isDarkMode)} isDarkMode={isDarkMode} />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
