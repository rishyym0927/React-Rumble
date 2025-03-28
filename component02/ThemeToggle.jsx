import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import styled from "styled-components";

const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  background-color: ${({ theme }) => (theme === "dark" ? "#fff" : "#222")};
  color: ${({ theme }) => (theme === "dark" ? "#222" : "#fff")};
  border-radius: 5px;
  font-size: 16px;
`;

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return <Button theme={theme} onClick={toggleTheme}>
    {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
  </Button>;
};

export default ThemeToggle;
