import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonText, SkeletonCard } from "./Skeleton";
import "./SkeletonDemo.css";

const SkeletonDemo = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="skeleton-demo">
        <h2>Skeleton Loading Demo</h2>

        <div className="demo-section">
          <h3>Text Skeleton</h3>
          <SkeletonText lines={3} />
        </div>

        <div className="demo-section">
          <h3>Image Skeleton</h3>
          <Skeleton type="image" width="300px" height="200px" />
        </div>

        <div className="demo-section">
          <h3>Card Skeleton</h3>
          <div className="card-grid">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="skeleton-demo">
      <h2>Component 05 Completed :)</h2>
      <p>This content was loaded after the skeleton loading state.</p>
    </div>
  );
};

export default SkeletonDemo;
