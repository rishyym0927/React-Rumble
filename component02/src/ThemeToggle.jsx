import React from "react";
import { useTheme } from "./ThemeContent";
import styled from "styled-components";

// Styled button
const Button = styled.button`
  background: ${({ theme }) => theme.color};
  color: ${({ theme }) => theme.background};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: all 0.3s ease;
    
  &:hover {
    opacity: 0.8;
  }
`;

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();

  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};

export default ThemeToggle;
