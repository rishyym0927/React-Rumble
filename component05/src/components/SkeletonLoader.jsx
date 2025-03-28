import React from "react";
import "./SkeletonLoader.css"; // Add styles for animation

function SkeletonLoader({ type }) {
  return <div className={`skeleton ${type}`}></div>;
}

export default SkeletonLoader;
