import styled, { keyframes } from "styled-components";
import { useState, useEffect } from "react";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  margin: 50px auto;
`;

const SkeletonBox = styled.div`
  height: ${(props) => props.height || "20px"};
  width: ${(props) => props.width || "100%"};
  background: linear-gradient(90deg, #2c3e50 25%, #34495e 50%, #2c3e50 75%);
  background-size: 400px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: 5px;
`;

const Card = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: #34495e;
  color: #ecf0f1;
`;

const SkeletonLoader = () => (
  <SkeletonContainer>
    <SkeletonBox height="30px" width="50%" />
    <SkeletonBox height="20px" width="100%" />
    <SkeletonBox height="20px" width="90%" />
    <SkeletonBox height="20px" width="80%" />
  </SkeletonContainer>
);

const DataCard = ({ data }) => (
  <Card>
    <h3>{data.title}</h3>
    <p>{data.description}</p>
  </Card>
);

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ title: "Skeleton Loader Example", description: "This data was loaded after a delay to show the effect of skeleton loading." });
    }, 3000);
  }, []);

  return <>{data ? <DataCard data={data} /> : <SkeletonLoader />}</>;
};

export default App;