import React from "react";
import "./App.css";

const SkeletonLoader = ({ type, count = 1 }) => {
  const skeletons = Array.from({ length: count });

  return (
    <div className="skeleton-container">
      {skeletons.map((_, index) => (
        <div
          key={index}
          className={`skeleton ${type}`}
          style={
            type === "text"
              ? { width: `${Math.random() * (80 - 50) + 50}%` } // Random width for text
              : {}
          }
        ></div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
