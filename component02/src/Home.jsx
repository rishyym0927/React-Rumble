import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    // Set page attribute for specific styling
    document.documentElement.setAttribute('data-page', 'home');
    return () => {
      document.documentElement.removeAttribute('data-page');
    };
  }, [location]);

  return (
    <div className="main-content">
      <h2>Welcome to Disneyland!</h2>
      <p>Experience the magic during the day or night!</p>
      {/* Page content */}
    </div>
  );
};

export default Home;