import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const lightTheme = {
  background: "#fff",
  color: "#000"
};

const darkTheme = {
  background: "#000",
  color: "#fff"
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: all 0.3s ease;
  }
`;

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProviderComponent = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme
  );

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

const Navbar = () => {
  const { toggleTheme } = useTheme();
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
};

const Home = () => <h1>Home Page</h1>;
const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const App = () => {
  return (
    <ThemeProviderComponent>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProviderComponent>
  );
};

export default App;