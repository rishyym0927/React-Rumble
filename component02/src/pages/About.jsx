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
      </div>

      {/* Content */}
      <div className="content">
        <h1>Welcome to the App</h1>
        <p>This is About page</p>
      </div>
    </div>
  );
}

export default App;