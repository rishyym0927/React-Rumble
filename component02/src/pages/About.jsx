import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
    const { theme } = useTheme();

    return (
        <div className={`page-content ${theme}`}>
            <h1>About Page</h1>
            <p>
                <strong> Developer:</strong> Varun Baisane
            </p>
        </div>
    );
};

export default About;