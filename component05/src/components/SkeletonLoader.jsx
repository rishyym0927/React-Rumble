import React from "react";
import "../styles.css";

const SkeletonLoader = ({ type }) => {
  const classes = {
    text: "skeleton skeleton-text",
    image: "skeleton skeleton-image",
    card: "skeleton skeleton-card",
  };

  return <div className={classes[type] || classes.text}></div>;
};

export default SkeletonLoader;
