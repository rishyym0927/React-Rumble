import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/home";
import About from "./pages/page1";
import Contact from "./pages/page2";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<></>} />
        </Route>
    )
);

const App = () => {
    // Load theme from localStorage or default to "light"
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // Apply theme class to <body> and update localStorage
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Function to toggle theme
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div className="app-container">
            <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
            <RouterProvider router={router} />
        </div>
    );
};

export default App;
