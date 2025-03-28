import React from "react";
import SkeletonLoader from "./SkeletonLoader.jsx";

const SkeletonCard = () => (
  <div className="p-4 border rounded-lg shadow-lg w-60 space-y-3">
    <SkeletonLoader width="w-full" height="h-40" rounded="rounded-lg" />
    <SkeletonLoader width="w-3/4" height="h-6" />
    <SkeletonLoader width="w-1/2" height="h-6" />
  </div>
);

export default SkeletonCard;
