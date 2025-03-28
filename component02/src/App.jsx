import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/theme.css"; // Import theme styles

function App() {
  return (
    <Router>
      <div className="app-container">
        {/* 🌍 Navbar */}
        <nav>
          <Link to="/">🏠 Home</Link> | <Link to="/about">📖 About</Link>
          <ThemeToggle /> {/* 🌗 Theme Toggle Button */}
        </nav>

        {/* 🔄 Page Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
