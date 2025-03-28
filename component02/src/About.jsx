import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import styled from 'styled-components';

const Container = styled.div`
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const About = () => {
    return (
        <Container>
            <h1>About Page</h1>
            <p>This is a multi-page site with persistent dark/light mode!</p>
        </Container>
    );
};

export default About;
