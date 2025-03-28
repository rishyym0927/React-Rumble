import React from "react";
import "./SkeletonLoader.css";

const SkeletonLoader = ({ type }) => {
    return (
        <div className={`skeleton ${type}`}></div>
    );
};

export default SkeletonLoader;
