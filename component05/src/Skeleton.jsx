import React from 'react';
import './Skeleton.css';

const Skeleton = ({ type = 'text', width, height, count = 1, circle = false }) => {
  const elements = Array.from({ length: count }, (_, i) => i);
  
  const SkeletonElement = ({ key }) => {
    const classes = `skeleton ${type} ${circle ? 'circle' : ''}`;
    const style = {
      width: width || (type === 'text' ? '100%' : undefined),
      height: height || (type === 'text' ? '12px' : undefined),
      borderRadius: circle ? '50%' : undefined
    };
    
    return <div key={key} className={classes} style={style}></div>;
  };

  return (
    <div className="skeleton-container">
      {elements.map((_, index) => (
        <SkeletonElement key={index} />
      ))}
    </div>
  );
};

export default Skeleton;