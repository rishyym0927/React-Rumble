import React from 'react';
import { ThemeProvider } from './ThemeContext';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
    return (
        <ThemeProvider>
            <Router>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
};

export default App;
