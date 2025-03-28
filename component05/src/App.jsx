import React, { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader.jsx";
import SkeletonCard from "./SkeletonCard.jsx";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching fake data from an API
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false); // Stop showing loader
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-xl font-bold">📦 API Data with Skeleton Loader</h1>

      {/* Show skeleton while loading, otherwise show actual data */}
      {loading ? (
        <SkeletonLoader width="w-40" height="h-8" />
      ) : (
        <p className="text-lg font-semibold">{data.title}</p>
      )}

      {/* Show skeleton for image (simulating API response) */}
      {loading ? (
        <SkeletonLoader width="w-40" height="h-40" rounded="rounded-lg" />
      ) : (
        <img
          src="https://via.placeholder.com/150"
          alt="Loaded"
          className="w-40 h-40 rounded-lg"
        />
      )}
    </div>
  );
};

export default App;
