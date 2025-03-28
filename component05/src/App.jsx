import React, { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({ title: "Loaded Content", description: "This is the fetched data." });
    }, 3000); // Simulate API call
  }, []);

  return (
    <div id="root">
      {!data ? (
        <div>
          <p className="loading-message" aria-live="polite">
            Loading content, please wait...
          </p>
          <SkeletonLoader type="text" count={2} aria-label="Loading text content" />
          <SkeletonLoader type="image" aria-label="Loading image content" />
          <SkeletonLoader type="card" aria-label="Loading card content" />
        </div>
      ) : (
        <div>
          <h1>{data.title}</h1>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
};

export default App;
