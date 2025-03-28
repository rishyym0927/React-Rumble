import React from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Layout({ children }) {
  return (
    <div className="page-container">
      <ThemeToggle />
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>
      {children}
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <h1 className="page-title">Welcome Home</h1>
      <div className="content-card">
        <p className="text-content">
          This is the home page with a beautiful theme switcher that persists across navigation.
          Try switching between dark and light modes using the button in the top right corner!
        </p>
      </div>
    </Layout>
  );
}

function About() {
  return (
    <Layout>
      <h1 className="page-title">About Us</h1>
      <div className="content-card">
        <p className="text-content">
          We're a team passionate about creating beautiful and accessible web experiences.
          Our theme switcher is just one example of how we prioritize user preferences.
        </p>
      </div>
    </Layout>
  );
}

function Contact() {
  return (
    <Layout>
      <h1 className="page-title">Contact</h1>
      <div className="content-card">
        <p className="text-content">
          Get in touch with us! We'd love to hear your thoughts about our theme implementation
          and how we can make it even better.
        </p>
      </div>
    </Layout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;