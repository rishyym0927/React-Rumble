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
  flex-direction: column;
  padding: 15px;
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

const About = () => {
  const { theme } = useTheme();

  return (
    <Container theme={theme}>
      <h1>About Us</h1>
      <Content>
        <p>
          Welcome to our website! We are dedicated to providing the best 
          experience with a seamless and responsive theme switcher. 
        </p>
        <p>
          Our goal is to create a user-friendly, accessible platform that adapts 
          to your preferences. Whether you prefer light or dark mode, we've got you covered!
        </p>
        <p>
          Stay tuned for more updates and new features. If you have any feedback, 
          feel free to <Link to="/contact">contact us</Link>.
        </p>
      </Content>
      <ThemeToggle />
      <Link to="/">Go to Home</Link>
    </Container>
  );
};

export default About;