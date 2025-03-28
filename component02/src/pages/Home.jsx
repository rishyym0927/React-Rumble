import { Link } from 'react-router-dom';
import '../styles/pages.css';

export default function Home() {
  return (
    <div className="page-container">
      <h1>Component 2 . Dark light multipage website </h1>
      <p>Discover amazing features with our dark/light theme switcher.</p>
      <div className="cta-buttons">
        <Link to="/contact" className="btn-primary">Contact Us</Link>
        <Link to="/about" className="btn-secondary">Learn More</Link>
      </div>
    </div>
  );
}