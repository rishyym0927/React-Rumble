import React, { useState, useEffect } from 'react';
import './App.css';

const SkeletonLoader = ({ type }) => {
  const getSkeleton = (type) => {
    switch (type) {
      case 'text':
        return <div className="skeleton-text"></div>;
      case 'image':
        return <div className="skeleton-image"></div>;
      case 'card':
        return (
          <div className="skeleton-card">
            <div className="skeleton-image"></div>
            <div className="skeleton-text"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return <>{getSkeleton(type)}</>;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate delay
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Skeleton Loading Component</h1>
      {loading ? (
        <div className="skeleton-container">
          <SkeletonLoader type="text" />
          <SkeletonLoader type="image" />
          <SkeletonLoader type="card" />
        </div>
      ) : (
        <div>
          <h2>Data has been loaded!</h2>
        </div>
      )}
    </div>
  );
};

export default App;
 