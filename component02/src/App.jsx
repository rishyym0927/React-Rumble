import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const lightTheme = {
  background: "#ffffff",
  color: "#000000",
};

const darkTheme = {
  background: "#121212",
  color: "#ffffff",
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: all 0.3s ease-in-out;
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: ${(props) => props.theme.background};
  border-bottom: 2px solid ${(props) => props.theme.color};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const NavLink = styled(Link)`
  margin: 0 15px;
  text-decoration: none;
  font-size: 18px;
  color: ${(props) => props.theme.color};
  &:hover {
    text-decoration: underline;
  }
`;

const ThemeToggleButton = styled.button`
  position: fixed;
  top: 15px;
  right: 15px;
  padding: 10px;
  background: none;
  border: 2px solid ${(props) => props.theme.color};
  color: ${(props) => props.theme.color};
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  z-index: 1100;
`;

const ThemeSwitcher = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;
  });

  useEffect(() => {
    localStorage.setItem("theme", theme === darkTheme ? "dark" : "light");
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
      </Navbar>
      <ThemeToggleButton onClick={() => setTheme(theme === darkTheme ? lightTheme : darkTheme)}>
        {theme === darkTheme ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </ThemeToggleButton>
      <div style={{ marginTop: "60px", padding: "20px" }}>{children}</div>
    </ThemeProvider>
  );
};

const Home = () => (
  <div className="Home">
    <h1>Home Page</h1>
    <p>Welcome to our website!</p>
  </div>
);

const About = () => (
  <div className="About">
    <h1>About Us</h1>
    <p>Learn more about our company.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <ThemeSwitcher>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ThemeSwitcher>
    </Router>
  );
};

export default App;