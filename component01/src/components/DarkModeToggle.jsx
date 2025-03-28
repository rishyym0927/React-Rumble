import { useEffect, useState } from 'react';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Persist mode across pages using localStorage
  useEffect(() => {
    const mode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(mode);
    document.body.classList.toggle('dark', mode);
  }, []);

  const toggleMode = () => {
    setDarkMode(prev => {
      const newMode = !prev;
      localStorage.setItem('darkMode', newMode);
      document.body.classList.toggle('dark', newMode);
      return newMode;
    });
  };

  return (
    <button onClick={toggleMode}>
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
