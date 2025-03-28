// src/ThemeToggle.js

import React, { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const applyTheme = (theme) => {
        document.body.style.backgroundColor = theme === 'light' ? '#f4f4f4' : '#121212';
        document.body.style.color = theme === 'light' ? '#000000' : '#ffffff';
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button 
            onClick={toggleTheme} 
            style={{ 
                padding: '12px 24px', 
                fontSize: '16px', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer', 
                backgroundColor: theme === 'light' ? '#000000' : '#ffffff', 
                color: theme === 'light' ? '#ffffff' : '#000000', 
                transition: 'all 0.3s ease' 
            }}
        >
            {theme === 'light' ? '🌙 Switch to Dark Mode' : '☀️ Switch to Light Mode'}
        </button>
    );
};

export default ThemeToggle;
