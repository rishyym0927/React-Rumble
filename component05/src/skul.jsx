import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: linear-gradient(145deg, #1e293b, #0f172a);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transform: perspective(1000px) rotateX(10deg);
  color: white;
`;

const SkeletonBox = styled(motion.div)`
  background: linear-gradient(90deg, #64748b 25%, #94a3b8 50%, #64748b 75%);
  background-size: 200% 100%;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

const TextSkeleton = styled(SkeletonBox)`
  height: 20px;
  width: 80%;
  margin: 10px 0;
`;

const ImageSkeleton = styled(SkeletonBox)`
  height: 150px;
  width: 100%;
  border-radius: 20px;
`;

const CardSkeleton = styled(SkeletonBox)`
  height: 200px;
  width: 100%;
  border-radius: 20px;
`;

const ButtonSkeleton = styled(SkeletonBox)`
  height: 50px;
  width: 120px;
  margin: 0 auto;
  border-radius: 25px;
`;

const CircleSkeleton = styled(SkeletonBox)`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: 0 auto;
`;

function SkeletonLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return <div>Welcome Web-Wing 🎉</div>;
  }

  return (
    <SkeletonContainer>
      <CircleSkeleton
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <ImageSkeleton
        animate={{ backgroundPositionX: ['0%', '100%'], backgroundColor: ['#1e293b', '#0f172a'] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <TextSkeleton
        animate={{ backgroundPositionX: ['0%', '100%'], opacity: [0.5, 1, 0.5], backgroundColor: ['#1e293b', '#64748b'] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
      <CardSkeleton
        animate={{ backgroundPositionX: ['0%', '100%'], scale: [1, 1.05, 1], rotateY: [0, 180, 0], backgroundColor: ['#0f172a', '#1e293b'] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <ButtonSkeleton
        animate={{ scale: [1, 1.1, 1], backgroundPositionX: ['0%', '100%'], rotateZ: [0, 15, -15, 0], backgroundColor: ['#64748b', '#94a3b8'] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </SkeletonContainer>
  );
}

export default SkeletonLoader;
