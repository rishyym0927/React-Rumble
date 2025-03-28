import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ThemeToggleButton from "../components/ThemeToggleButton";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  background: ${(props) => props.theme.navbar};
  a {
    margin-right: 20px;
    text-decoration: none;
    color: ${(props) => props.theme.text};
  }
`;

const AppRouter = () => {
  return (
    <Router>
      <Navbar>
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
        <ThemeToggleButton />
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
