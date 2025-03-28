import React from 'react';
import './Skeleton.css';

const Skeleton = ({ type = 'text', count = 1, width, height }) => {
  const elements = Array.from({ length: count }, (_, i) => i);
  
  return (
    <div className="skeleton-container">
      {elements.map((_, index) => (
        <div
          key={index}
          className={`skeleton ${type}`}
          style={{ width, height }}
        />
      ))}
    </div>
  );
};

export const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <Skeleton type="image" height="200px" />
      <div className="skeleton-card-content">
        <Skeleton type="text" width="80%" />
        <Skeleton type="text" width="60%" />
        <Skeleton type="text" width="40%" />
      </div>
    </div>
  );
};

export default Skeleton;