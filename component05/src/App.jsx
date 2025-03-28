import React, { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        title: "Skeleton Loading Example",
        image: "https://via.placeholder.com/150",
        description: "This is a sample description that appears after loading."
      });
    }, 3000); // Simulating an API call delay
  }, []);

  return (
    <div className="app-container">
      <h1>Skeleton Loading Demo</h1>
      <div className="content-card">
        {data ? (
          <>
            <img src={data.image} alt="Loaded Content" className="content-image" />
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </>
        ) : (
          <>
            <SkeletonLoader type="image" width="150px" height="150px" />
            <SkeletonLoader type="text" width="80%" height="20px" />
            <SkeletonLoader type="text" width="90%" height="20px" />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
