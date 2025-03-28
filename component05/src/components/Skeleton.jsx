import React from 'react';

function Skeleton({ variant = 'text', width, height, className = '' }) {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';
  
  const variants = {
    text: 'h-4',
    heading: 'h-6',
    image: 'h-48',
    avatar: 'rounded-full h-12 w-12',
    card: 'h-[300px]'
  };

  const styles = {
    width: width || 'auto',
    height: height || 'auto'
  };

  return (
    <div 
      className={`${baseClasses} ${variants[variant] || variants.text} ${className}`}
      style={styles}
    />
  );
}

export function SkeletonCard() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <Skeleton variant="image" className="rounded-lg mb-4" />
      <Skeleton variant="heading" className="w-3/4 mb-4" />
      <Skeleton variant="text" className="w-full mb-2" />
      <Skeleton variant="text" className="w-full mb-2" />
      <Skeleton variant="text" className="w-2/3" />
    </div>
  );
}

export function SkeletonProfile() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton variant="avatar" />
      <div className="flex-1">
        <Skeleton variant="heading" className="w-1/3 mb-2" />
        <Skeleton variant="text" className="w-1/2" />
      </div>
    </div>
  );
}

export function SkeletonList({ count = 3 }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex items-center space-x-4">
          <Skeleton variant="avatar" className="w-16 h-16" />
          <div className="flex-1">
            <Skeleton variant="heading" className="w-1/3 mb-2" />
            <Skeleton variant="text" className="w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}

export { Skeleton }