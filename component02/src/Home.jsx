import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext'; // ✅ Correct import path

const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext); // ✅ Context will only work if provided properly

    return (
        <div style={{ backgroundColor: theme === 'light' ? '#fff' : '#000', color: theme === 'light' ? '#000' : '#fff', height: '100vh' }}>
            <h1>Home Page</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};

export default Home;
