import { Link } from 'react-router-dom';
import '../styles/pages.css';

export default function About() {
  return (
    <div className="page-container">
      <h1>About Us</h1>
      <p>github : Vedantvijayhumbe</p>
      <div className="features">
        <div className="feature-card">
          <h3>Theme Switching</h3>
          <p>Enjoy light and dark modes with persistent settings.</p>
        </div>
        <div className="feature-card">
          <h3>Multi-Page</h3>
          <p>Full navigation between different sections.</p>
        </div>
      </div>
      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
}