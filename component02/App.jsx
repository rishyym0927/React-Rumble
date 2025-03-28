import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./Home";
import About from "./About";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <GlobalStyles theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

const App = () => (
  <AppContent />
);

export default App;
