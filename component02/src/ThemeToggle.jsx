import { useTheme } from './ThemeContext';
import styled from 'styled-components';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-btn" onClick={toggleTheme}>
      {theme === 'light' ? (
        <>
          <span>🌙</span> Dark Magic
        </>
      ) : (
        <>
          <span>☀️</span> Daytime Fun
        </>
      )}
    </button>
  );
};

export default ThemeToggle;