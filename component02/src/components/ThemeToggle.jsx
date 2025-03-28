import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle ${theme}`}
      style={{
        backgroundColor: theme === 'light'
          ? 'var(--bg-secondary-light)'
          : 'var(--bg-secondary-dark)',
        color: theme === 'light'
          ? 'var(--text-primary-light)'
          : 'var(--text-primary-dark)',
        border: 'none',
        padding: '10px 15px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      {theme === 'light' ? <Moon /> : <Sun />}
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggle;