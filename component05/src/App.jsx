import React, { useState, useEffect } from "react";
import SkeletonLoader from "./components/SkeletonLoader";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        text: "This is the loaded text",
        image: "https://via.placeholder.com/150",
      });
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="app-container">
      <h1>Skeleton Loading Demo</h1>
      <div className="content">
        {loading ? <SkeletonLoader type="text" /> : <p>{data.text}</p>}
        {loading ? <SkeletonLoader type="image" /> : <img src={data.image} alt="Loaded" />}
      </div>
    </div>
  );
};

export default App;
