import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import { GlobalStyles } from './ThemeStyles';
import ThemeToggle from './ThemeToggle';
import Home from './Home';


function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Router>
        <div className="app">
          <header className="header">
            <h1>Disneyland Adventure</h1>
            <ThemeToggle />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
