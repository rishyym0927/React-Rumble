import React from "react";
import "./Skeleton.css";

const Skeleton = ({ type = "text", width, height, className = "" }) => {
  const getSkeletonClass = () => {
    switch (type) {
      case "text":
        return "skeleton-text";
      case "image":
        return "skeleton-image";
      case "card":
        return "skeleton-card";
      default:
        return "skeleton-text";
    }
  };

  return (
    <div
      className={`skeleton ${getSkeletonClass()} ${className}`}
      style={{ width, height }}
    />
  );
};

export const SkeletonText = ({ lines = 1, className = "" }) => {
  return (
    <div className={`skeleton-text-container ${className}`}>
      {[...Array(lines)].map((_, index) => (
        <Skeleton
          key={index}
          type="text"
          width={index === lines - 1 ? "60%" : "100%"}
          height="16px"
          className="mb-2"
        />
      ))}
    </div>
  );
};

export const SkeletonCard = ({ className = "" }) => {
  return (
    <div className={`skeleton-card-container ${className}`}>
      <Skeleton type="image" width="100%" height="200px" className="mb-3" />
      <SkeletonText lines={3} />
    </div>
  );
};

export default Skeleton;
