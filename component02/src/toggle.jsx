import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
  }
`;

const lightTheme = {
  body: '#f0f0f5',
  text: '#333',
  buttonBg: '#4a90e2',
  buttonText: '#fff',
};

const darkTheme = {
  body: '#1e1e2f',
  text: '#f0f0f5',
  buttonBg: '#6c5ce7',
  buttonText: '#fff',
};

const ToggleButton = styled.button`
  padding: 10px 20px;
  font-size: 1.2rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.buttonBg};
  color: ${({ theme }) => theme.buttonText};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }
`;

const Icon = styled(motion.div)`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background: linear-gradient(145deg, #6c5ce7, #4a90e2);
  border-radius: 25px;
  margin: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);

  a {
    text-decoration: none;
    padding: 15px 30px;
    background: linear-gradient(145deg, #ff9ff3, #f368e0);
    color: white;
    border-radius: 25px;
    font-size: 1.5rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.2);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
    }
  }
`;

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <ToggleButton
          as={motion.button}
          initial={{ rotate: 0 }}
          animate={{ rotate: theme === 'light' ? 0 : 180 }}
          transition={{ duration: 0.5 }}
          onClick={toggleTheme}
          style={{ position: 'absolute', top: '10px', right: '10px' }}
        >
          {theme === 'light' ? '🌞' : '🌙'}
        </ToggleButton>
        <Nav>
          <Link to="/">🏠 Home</Link>
          <Link to="/about">ℹ️ About</Link>
        </Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Home Page</h1>
      <p>Welcome to home page Team AXIOS</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>About Page</h1>
      <p>HELLO WEB-WING</p>
    </div>
  );
}

export default ThemeToggle;
