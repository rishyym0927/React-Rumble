import React from "react";
import "./5.css";

const SkeletonLoader = ({ type, width, height }) => {
  const styles = {
    width: width || "100%",
    height: height || "1rem",
  };

  return <div className={`skeleton ${type}`} style={styles}></div>;
};

export default SkeletonLoader;
