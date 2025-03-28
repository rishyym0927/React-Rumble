import React from "react";
import "./SkeletonCard.css"; // Import CSS for styling and animation

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton skeleton-image"></div>
      <div className="skeleton skeleton-title"></div>
      
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text"></div><div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-text"></div>
      <div className="skeleton skeleton-button"></div>
    </div>
  );
};

export default SkeletonCard;
