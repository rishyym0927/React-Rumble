import React from "react";
import Skeleton from "./Skeleton.jsx";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      <Skeleton type="text" width={200} />
      <Skeleton type="image" width={50} height={50} />
      <Skeleton type="card" width={300} height={150} />
    </div>
  );
};

export default SkeletonLoader;
