import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const lightTheme = {
  mode: 'light',
  background: '#ffffff',
  color: '#000000',
};

const darkTheme = {
  mode: 'dark',
  background: '#000000',
  color: '#ffffff',
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark' ? darkTheme : lightTheme;
  });

  useEffect(() => {
    console.log('Theme Updated:', theme); // Debugging log
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme.mode === 'dark' ? lightTheme : darkTheme;
      localStorage.setItem('theme', newTheme.mode);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
