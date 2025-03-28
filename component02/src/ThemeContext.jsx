// ThemeContext.jsx
import React, { createContext, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

export const ThemeContext = createContext();

const lightTheme = {
    background: '#ffffff',
    color: '#000000'
};

const darkTheme = {
    background: '#000000',
    color: '#ffffff'
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const themeObject = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}> {/* ✅ Fixed Syntax */}
            <StyledThemeProvider theme={themeObject}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
