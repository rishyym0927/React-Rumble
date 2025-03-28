import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      
      <h1>Welcome to My Website</h1>
      <p>This website supports a dark/light mode toggle that persists across pages.</p>

      <a href="pages/about.html">Go to About Page</a>
    </div>
  );
};

export default App;
