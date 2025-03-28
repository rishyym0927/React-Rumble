import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the ThemeContext
export const ThemeContext = createContext();

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
    // Initialize theme from localStorage or default to 'light'
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('app-theme');
        return savedTheme || 'light';
    });

    // Effect to update localStorage and apply theme
    useEffect(() => {
        // Save theme to localStorage
        localStorage.setItem('app-theme', theme);

        // Apply theme class to body
        document.body.className = theme;
    }, [theme]);

    // Toggle theme function
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    // Provide theme context to children
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

// Custom hook to use theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};