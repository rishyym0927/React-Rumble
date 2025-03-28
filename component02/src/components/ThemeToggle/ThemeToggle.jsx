import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={`theme-toggle ${theme}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="toggle-circle">
        <div className="toggle-icon">
          {theme === 'light' ? (
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 2V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M12 20V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M4.92993 4.92999L6.33993 6.33999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M17.6599 17.66L19.0699 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M2 12H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M20 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M6.33993 17.66L4.92993 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M19.0699 4.92999L17.6599 6.33999" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none">
              <path d="M20.958 15.325C21.424 15.018 21.549 14.391 21.236 13.934C20.433 12.719 19.287 11.702 17.911 11.014C16.298 10.211 14.463 9.885 12.644 10.077C10.349 10.321 8.17989 11.322 6.53889 12.963C4.89789 14.604 3.89695 16.773 3.65295 19.068C3.46095 20.887 3.78695 22.722 4.58995 24.335C5.27795 25.711 6.29495 26.857 7.50995 27.66C7.96695 27.973 8.59395 27.848 8.90095 27.382C9.20795 26.916 9.08295 26.289 8.61695 25.982C7.11695 24.973 5.87395 23.568 5.02795 21.905C4.38295 20.623 4.11995 19.191 4.26995 17.766C4.45495 15.991 5.25495 14.286 6.53889 13.002C7.82289 11.718 9.52795 10.918 11.303 10.733C12.728 10.583 14.16 10.846 15.442 11.491C17.105 12.337 18.51 13.58 19.519 15.08C19.826 15.546 20.453 15.671 20.919 15.364L20.958 15.325Z" fill="currentColor"/>
            </svg>
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;