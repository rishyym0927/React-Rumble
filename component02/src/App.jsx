import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <nav className="nav-container">
            <ul className="nav-links">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? 'active-link' : ''
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? 'active-link' : ''
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? 'active-link' : ''
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <ThemeToggle />
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;