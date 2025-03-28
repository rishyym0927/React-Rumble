import './ThemeToggle.css';

const ThemeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button 
      className="theme-toggle"
      onClick={() => setDarkMode(!darkMode)}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};

export default ThemeToggle;