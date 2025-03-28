import React, { useState, useEffect } from "react";
import "./SkeletonLoader.css"; // Import the CSS file

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton title"></div>
      <div className="skeleton text"></div>
      <div className="skeleton text"></div>
      <div className="skeleton text"></div>
      <div className="skeleton button"></div>
    </div>
  );
};

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating a delay (e.g., API call)
    setTimeout(() => {
      setData({
        title: "Loaded Data",
        description: "This is the real content after loading.",
      });
    }, 3000); // Change this time as needed
  }, []);

  return (
    <div className="app-container">
      {data ? (
        <div className="content">
          <h2>{data.title}</h2>
          <p>{data.description}</p>
          <button>Click Me</button>
        </div>
      ) : (
        <SkeletonLoader />
      )}
    </div>
  );
};

export default App;
