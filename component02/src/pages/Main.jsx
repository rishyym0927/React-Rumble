import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Main.css";


function Main() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="main-container">
      <button className="theme-toggle" onClick={toggleTheme}>
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <h1>Welcome to Our Website</h1>
      <p>Explore the sections below:</p>
      <div className="nav-buttons">
        <button onClick={() => navigate("/about")}>About Us</button>
        <button onClick={() => navigate("/faqs")}>FAQs</button>
      </div>
    </div>
  );
}

export default Main;
