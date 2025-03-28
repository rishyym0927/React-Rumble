import React from "react";
import "../styles.css"; // Importing the CSS file

export default function SkeletonLoader({ type }) {
  return (
    <div className="skeleton-card">
      {type === "image" && <div className="skeleton skeleton-image"></div>}
      {type === "text" && (
        <>
          <div className="skeleton skeleton-text" style={{ width: "80%" }}></div>
          <div className="skeleton skeleton-text" style={{ width: "60%" }}></div>
        </>
      )}
      {type === "card" && (
        <>
          <div className="skeleton skeleton-image"></div>
          <div className="skeleton skeleton-text" style={{ width: "70%" }}></div>
          <div className="skeleton skeleton-text" style={{ width: "50%" }}></div>
        </>
      )}
    </div>
  );
}
