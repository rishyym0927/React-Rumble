import React, { useEffect, useState } from "react";
import DataCard from "./components/DataCard";
import "./styles.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setData([
        { id: 1, title: "React Skeleton Loader", description: "Enhances UX by showing placeholders while data loads." },
        { id: 2, title: "Supports Multiple Shapes", description: "Loaders for text, images, and cards." },
        { id: 3, title: "Smooth and Animated", description: "Provides a seamless user experience." }
      ]);
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="app-container">
      <h1>🚀 Skeleton Loading Component</h1>
      {loading ? (
        <>
          <DataCard loading={true} />
          <DataCard loading={true} />
          <DataCard loading={true} />
        </>
      ) : (
        data.map((item) => <DataCard key={item.id} title={item.title} description={item.description} loading={false} />)
      )}
    </div>
  );
}

export default App;
