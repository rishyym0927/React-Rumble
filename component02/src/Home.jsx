import React from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "./ThemeContent";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

const Content = styled.div`
  max-width: 800px;
  text-align: center;
  margin-top: 20px;
  line-height: 1.6;
`;

const Home = () => {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <h1>Welcome to Our Website!</h1>
      <Content>
        <p>
          This is a multipage website featuring a dynamic theme switcher that allows you to toggle between light and dark modes seamlessly.
        </p>
        <p>
          Our website is designed to be user-friendly, offering smooth navigation and a great user experience. Explore different pages and customize your theme preference with ease.
        </p>
      </Content>
      <ThemeToggle />
      <Link to="/about">Go to About</Link>
    </Container>
  );
};

export default Home;