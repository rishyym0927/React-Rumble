import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const colorSchemes = {
  light: {
    bg: '#f8f9fa',
    text: '#212529',
    primary: '#4361ee',
    secondary: '#3a0ca3',
    accent: '#f72585',
    card: '#ffffff',
    border: '#e9ecef',
    navBg: 'linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)'
  },
  dark: {
    bg: '#121212',
    text: '#f8f9fa',
    primary: '#4cc9f0',
    secondary: '#4895ef',
    accent: '#f72585',
    card: '#1e1e1e',
    border: '#2d2d2d',
    navBg: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeName) => {
    const colors = colorSchemes[themeName];
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
    document.documentElement.setAttribute('data-theme', themeName);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);