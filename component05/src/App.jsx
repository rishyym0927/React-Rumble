import React, { useState, useEffect } from "react";
import SkeletonLoader from "./components/SkeletonLoader.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("Data Loaded!");
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="app-container">
      {loading ? <SkeletonLoader /> : <h2>{data}</h2>}
    </div>
  );
};

export default App;
