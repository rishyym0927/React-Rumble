import React from "react";
import "./Skeleton.css";

const Skeleton = ({ type }) => {
  const classes = `skeleton ${type}`;
  return <div className={classes}></div>;
};

const SkeletonCard = () => (
  <div className="skeleton-card">
    <Skeleton type="avatar" />
    <Skeleton type="title" />
    <Skeleton type="text" />
  </div>
);

export { Skeleton, SkeletonCard };
