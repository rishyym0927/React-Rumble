import { createContext, useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const lightTheme = {
  background: "#f8f9fa",
  color: "#212529",
  buttonBg: "#007bff",
  buttonColor: "#fff",
};

const darkTheme = {
  background: "#121212",
  color: "#f8f9fa",
  buttonBg: "#ff9800",
  buttonColor: "#000",
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: all 0.3s ease-in-out;
  }
`;

const ThemeContext = createContext();

const ThemeProviderWrapper = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

const ToggleButton = styled.button`
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonColor};
  border: none;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    filter: brightness(85%);
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: ${(props) => props.theme.buttonBg};
`;

const NavLinks = styled.div`
  a {
    color: ${(props) => props.theme.buttonColor};
    text-decoration: none;
    margin: 0 15px;
    font-weight: bold;
  }
`;

const Home = () => {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <h1>Home Page</h1>
      <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
    </div>
  );
};

const About = () => {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <h1>About Page</h1>
      <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>
    </div>
  );
};

const App = () => (
  <ThemeProviderWrapper>
    <Router>
      <Navbar>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </NavLinks>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </ThemeProviderWrapper>
);

export default App;
