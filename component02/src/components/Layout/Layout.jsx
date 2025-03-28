import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="theme-toggle-container">
        <ThemeToggle />
      </div>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} My App
      </footer>
    </div>
  );
};

export default Layout;