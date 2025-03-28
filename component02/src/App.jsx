// src/App.js

import React from 'react';
import ThemeToggle from './ThemeToggle';

const App = () => {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh' // Full viewport height
        }}>
            <h1>Welcome to My Website</h1>
            <ThemeToggle />
        </div>
    );
};

export default App;