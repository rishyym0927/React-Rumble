import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";
import Home from "./Home";
import About from "./About";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <ThemeToggle />
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
