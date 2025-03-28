import React, { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";

function DataComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData({
        title: "React Skeleton Loader",
        description: "This is a simple example of a loading placeholder.",
      });
      setLoading(false);
    }, 2000); // Simulating API delay
  }, []);

  return (
    <div style={styles.container}>
      {loading ? (
        <>
          <SkeletonLoader type="text" />
          <SkeletonLoader type="text" />
          <SkeletonLoader type="image" />
          <SkeletonLoader type="card" />
        </>
      ) : (
        <div style={styles.card}>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "40px auto",
    textAlign: "center",
  },
  card: {
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default DataComponent;
