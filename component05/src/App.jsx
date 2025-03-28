import React, { useState } from "react";
import "./App.css"; // Import CSS for animation styles

const SkeletonLoading = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const handleLoadCard = () => {
    setIsLoading(true);
    setData(null); // Reset data
    // Simulate API call
    setTimeout(() => {
      setData({
        text: "Hello, I am a loaded card!",
        image: "https://cdn-icons-png.flaticon.com/512/10917/10917591.png",
      });
      setIsLoading(false);
    }, 3000); // 3-second loading time
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Skeleton Loading Example</h1>
      <button
        onClick={handleLoadCard}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Load Card
      </button>
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "10px",
          width: "300px",
        }}
      >
        {isLoading ? (
          <div>
            {/* Skeleton for text */}
            <div className="skeleton skeleton-text" />
            {/* Skeleton for image */}
            <div className="skeleton skeleton-image" />
          </div>
        ) : data ? (
          <div>
            {/* Loaded content */}
            <img
              src={data.image}
              alt="Loaded content"
              style={{ width: "150px", height: "150px" }}
            />
            <p>{data.text}</p>
          </div>
        ) : (
          <p>Click "Load Card" to display content.</p>
        )}
      </div>
    </div>
  );
};

export default SkeletonLoading;