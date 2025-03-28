import React from "react";
import "./SkeletonLoader.css"; // Import CSS for styling and animation

const SkeletonLoader = ({ type }) => {
  const classNames = {
    text: "skeleton-text",
    image: "skeleton-image",
    card: "skeleton-card",
  };

  return <div className={`skeleton ${classNames[type]}`}></div>;
};

export default SkeletonLoader;
