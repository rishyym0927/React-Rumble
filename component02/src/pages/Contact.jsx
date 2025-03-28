import './App.css';

function App({isDarkMode, toggleTheme}) {
  return (
    <div
      style={{
        filter: isDarkMode ? 'invert(1)' : 'none', // Use invert in dark mode
        backgroundColor: isDarkMode ? '#333' : '#fff', // Pure white background in light mode
        color: isDarkMode ? '#fff' : '#000', // Pure black text in light mode
        transition: 'filter 0.3s ease, background-color 0.3s ease, color 0.3s ease', // Smooth transitions
        minHeight: '100vh', // Ensure full viewport coverage
      }}
    >
      {/* Navbar */}
      <div className="navbar">
        <ul className="nav-ul" style={{ listStyle: 'none' }}>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <button
          className="theme-toggler"
          onClick={toggleTheme}
          style={{
            backgroundColor: isDarkMode ? '#555' : '#ddd', // Button adjusts to theme
            color: isDarkMode ? '#fff' : '#000', // Button text contrasts appropriately
            border: 'none',
            padding: '8px 16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
        >
          Change to {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
      </div>

      {/* Content */}
      <div className="content">
        <h1>Welcome to the App</h1>
        <p>This is a Contact Page</p>
      </div>
    </div>
  );
}

export default App;