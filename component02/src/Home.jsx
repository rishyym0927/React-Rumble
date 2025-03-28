// ThemeToggle.jsx
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} style={{ marginLeft: '1rem' }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}
