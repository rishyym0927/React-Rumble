import React, { useState, useEffect } from "react";
import SkeletonLoader from "./components/SkeletonLoader";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        image: "https://via.placeholder.com/150",
        title: "Skeleton Loading Example",
        description: "This is a sample data after loading.",
      });
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>
        Skeleton Loader Example
      </h1>

      {/* Skeleton Placeholder */}
      {loading ? <SkeletonLoader type="card" /> : (
        <div className="skeleton-card">
          <img src={data.image} alt="Loaded Content" className="skeleton-image" />
          <h2 style={{ color: "white" }}>{data.title}</h2>
          <p style={{ color: "#ccc" }}>{data.description}</p>
        </div>
      )}
    </div>
  );
}
