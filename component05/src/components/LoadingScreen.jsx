import React from "react";

export default function Skeleton({ width = "w-full", height = "h-4", rounded = "rounded-md" }) {
  return (
    <div className={`bg-gray-300 animate-pulse ${width} ${height} ${rounded}`}></div>
  );
}

export function SkeletonCard() {
  return (
    <div className="p-4 border rounded-lg space-y-4">
      <Skeleton width="w-32" height="h-6" />
      <Skeleton width="w-full" height="h-4" />
      <Skeleton width="w-full" height="h-4" />
      <Skeleton width="w-20" height="h-4" />
    </div>
  );
}

export function SkeletonImage() {
  return <Skeleton width="w-full" height="h-48" rounded="rounded-lg" />;
}

export function SkeletonList({ count = 3 }) {
  return (
    <div className="space-y-2">
      {[...Array(count)].map((_, i) => (
        <Skeleton key={i} width="w-full" height="h-6" />
      ))}
    </div>
  );
}

export function LoadingScreen() {
  return (
    <div className="p-6 space-y-4 space-x-4">
      <SkeletonImage />
      <SkeletonCard />
      <SkeletonList count={5} />
    </div>
  );
}
