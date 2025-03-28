import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
    const { theme } = useTheme();

    return (
        <div className={`page-content ${theme}`}>
            <h1>Contact Page</h1>
            <p>
                <strong>Contact:</strong> IIIT Lucknow, Ahmamau, Sultanpur Road, Lucknow - 226028
            </p>
        </div>
    );
};

export default Contact;