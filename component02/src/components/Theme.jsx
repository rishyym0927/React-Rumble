import { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

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
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.color};
    transition: all 0.3s ease-in-out;
  }
`;

const ThemeContext = createContext();

function ThemeProviderComponent({ children }) {
  const [theme, setTheme] = useState("light");
  
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
}

function Home() {
  const { toggleTheme } = useContext(ThemeContext);
  return (
    <Container>
      <h1>Home Page</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to="/about">Go to About</Link>
    </Container>
  );
}

function About() {
  return (
    <Container>
      <h1>About Page</h1>
      <Link to="/">Go to Home</Link>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
`;

export default function App() {
  return (
    <ThemeProviderComponent>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProviderComponent>
  );
}
