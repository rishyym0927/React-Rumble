import React from "react";
import "../styles/Skeleton.css"; // Import styling

const Skeleton = ({ type }) => {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
};

export default Skeleton;
