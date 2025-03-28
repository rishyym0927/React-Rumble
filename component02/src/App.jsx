import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Define light and dark theme properties
const themes = {
  light: {
    background: '#f5f5f5',
    textColor: '#333',
    buttonBackground: '#333',
    buttonText: '#fff',
  },
  dark: {
    background: '#1c1c1c',
    textColor: '#e0e0e0',
    buttonBackground: '#fff',
    buttonText: '#333',
  },
};

// Styled components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textColor};
  transition: background-color 0.4s ease, color 0.4s ease;
`;

const Button = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.theme.buttonBackground};
  color: ${(props) => props.theme.buttonText};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fetch the saved theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Toggle between dark and light modes
  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider theme={isDarkMode ? themes.dark : themes.light}>
      <Wrapper>
        <Button onClick={toggleTheme}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
