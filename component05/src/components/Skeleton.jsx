import React from "react";
import "../styles/skeleton.css";

const Skeleton = ({ type, width, height }) => {
  return (
    <div
      className={`skeleton ${type}`}
      style={{
        width: width ? `${width}px` : "100%",
        height: height ? `${height}px` : "16px",
      }}
    />
  );
};

export default Skeleton;
