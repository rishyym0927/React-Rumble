import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const SkeletonBox = styled.div`
  height: ${(props) => props.height || "20px"};
  width: ${(props) => props.width || "100%"};
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 400% 100%;
  border-radius: 8px;
  animation: ${shimmer} 1.5s infinite;
  transition: all 0.3s ease-in-out;
`;

const SkeletonCircle = styled(SkeletonBox)`
  border-radius: 50%;
`;

export default function SkeletonLoader() {
  return (
    <SkeletonWrapper>
      <SkeletonBox width="60%" height="25px" />
      <SkeletonBox width="100%" height="18px" />
      <SkeletonBox width="100%" height="18px" />
      <SkeletonBox width="80%" height="18px" />
      <SkeletonCircle width="120px" height="120px" />
    </SkeletonWrapper>
  );
}