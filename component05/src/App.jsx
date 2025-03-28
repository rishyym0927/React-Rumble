import React, { useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard";
import "./Skeleton.css";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData([
        { id: 1, title: "React Skeleton Loader", content: "Fetching API data..." },
        { id: 2, title: "Optimized UX", content: "Skeletons improve perceived performance." }
      ]);
      setLoading(false);
    }, 3000); // Simulating API delay
  }, []);

  return (
    <div className="container">
      <h1>🚀 Skeleton Loading Demo</h1>
      {loading ? (
        <>
          <SkeletonCard />
          <SkeletonCard />
        </>
      ) : (
        data.map((item) => (
          <div key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default App;
