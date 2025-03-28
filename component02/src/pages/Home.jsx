import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Home = () => {
    const { theme } = useTheme();

    return (
        <div className={`page-content ${theme}`}>
            <h1 style={{
                fontSize: '2.5rem',
                marginBottom: '20px',
                color: theme === 'light'
                    ? 'var(--text-primary-light)'
                    : 'var(--text-primary-dark)'
            }}>
                Welcome to Our Website
            </h1>
            <p style={{
                fontSize: '1rem',
                color: theme === 'light'
                    ? 'var(--text-secondary-light)'
                    : 'var(--text-secondary-dark)',
                lineHeight: '1.8'
            }}>
                Explore our beautifully designed website with seamless theme switching.
                Experience the clean, modern interface that adapts to your preferred color scheme.
            </p>
        </div>
    );
};

export default Home;