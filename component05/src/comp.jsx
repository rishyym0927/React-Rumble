import React from 'react';
import { Loader2 } from 'lucide-react';

// Utility function to generate random width for more natural look
const getRandomWidth = () => {
  const widths = ['w-1/4', 'w-1/2', 'w-2/3', 'w-3/4', 'w-full'];
  return widths[Math.floor(Math.random() * widths.length)];
};

// Skeleton component with multiple variants
const Skeleton = ({ 
  type = 'text', 
  count = 1, 
  height = 'h-4', 
  width = 'w-full',
  rounded = 'rounded',
  className = '' 
}) => {
  const baseClasses = `
    bg-gray-200 
    animate-pulse 
    ${height} 
    ${rounded}
  `;

  const renderSkeletonItem = (index) => {
    switch (type) {
      case 'text':
        return (
          <div 
            key={index} 
            className={`
              ${baseClasses} 
              ${width || getRandomWidth()} 
              mb-2
              ${className}
            `}
          />
        );
      
      case 'image':
        return (
          <div 
            key={index} 
            className={`
              ${baseClasses} 
              ${width} 
              aspect-square 
              flex 
              items-center 
              justify-center 
              text-gray-400
              ${className}
            `}
          >
            <Loader2 className="animate-spin" />
          </div>
        );
      
      case 'card':
        return (
          <div 
            key={index} 
            className={`
              bg-white 
              border 
              border-gray-200 
              rounded-lg 
              p-4 
              shadow-sm 
              animate-pulse
              ${className}
            `}
          >
            <div className="flex space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full" />
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-4 bg-gray-200 rounded col-span-2" />
                    <div className="h-4 bg-gray-200 rounded col-span-1" />
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div>
      {[...Array(count)].map((_, index) => renderSkeletonItem(index))}
    </div>
  );
};

export default Skeleton;