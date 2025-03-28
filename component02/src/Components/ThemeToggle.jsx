import React from "react";
import "./ThemeToggle.css";

const ThemeToggle = ({ toggleTheme, isDarkMode }) => {
    return (
        <div>
            <input
                type="checkbox"
                className="checkbox"
                id="checkbox"
                onChange={toggleTheme}
                checked={isDarkMode}
            />
            <label htmlFor="checkbox" className="checkbox-label">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <span className="ball"></span>
            </label>
        </div>
    );
};

export default ThemeToggle;
