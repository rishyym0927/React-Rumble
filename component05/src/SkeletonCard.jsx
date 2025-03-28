import React from "react";
import Skeleton from "./Skeleton";
import "./Skeleton.css";

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <Skeleton type="image" />
      <Skeleton type="title" />
      <Skeleton type="text" />
      <Skeleton type="text" />
    </div>
  );
};

export default SkeletonCard;
