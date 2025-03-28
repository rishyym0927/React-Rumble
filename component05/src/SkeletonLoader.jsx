import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./SkeletonLoader.css";

const SkeletonLoader = ({ type }) => {
  if (type === "text") {
    return <Skeleton count={3} className="skeleton-text" />;
  }
  if (type === "image") {
    return <Skeleton height={200} width={200} className="skeleton-image" />;
  }
  if (type === "card") {
    return (
      <div className="skeleton-card">
        <Skeleton height={150} />
        <Skeleton height={20} width={`80%`} style={{ margin: "10px 0" }} />
        <Skeleton height={20} width={`60%`} />
      </div>
    );
  }
  return null;
};

export default SkeletonLoader;
