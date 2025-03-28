import React from "react";
import styled from "styled-components";
import { useTheme } from "../context/ThemeContext";

const ToggleButton = styled.button`
  padding: 10px 20px;
  background: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonText};
  border: none;
  cursor: pointer;
  margin: 10px;
  transition: 0.3s;
  border-radius: 5px;

  &:hover {
    opacity: 0.8;
  }
`;

const ThemeToggleButton = () => {
  const { toggleTheme } = useTheme();
  return <ToggleButton onClick={toggleTheme}>Toggle Theme</ToggleButton>;
};

export default ThemeToggleButton;
