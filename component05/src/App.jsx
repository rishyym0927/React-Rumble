// src/App.js
import React, { useState, useEffect } from "react";
import Skeleton from "./components/Skeleton";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const apiData = [
        {
          id: 1,
          title: "Explore the World of Skeleton Loaders",
          image: "https://source.unsplash.com/600x400/?nature,water",
        },
        {
          id: 2,
          title: "Loading Effects that Elevate UX",
          image: "https://source.unsplash.com/600x400/?technology,city",
        },
        {
          id: 3,
          title: "Experience Seamless API Integration",
          image: "https://source.unsplash.com/600x400/?business,office",
        },
      ];
      console.log("✅ API Response:", apiData);
      setData(apiData);
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="app">
      <h1>🔥 Advanced Skeleton Loading</h1>
      <div className="card-container">
        {isLoading
          ? [1, 2, 3].map((item) => <Skeleton key={item} />)
          : data.map((item) => (
              <div className="card" key={item.id}>
                <img
                  src={`${item.image}?nocache=${Date.now()}`}
                  alt={item.title}
                  className="card-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://via.placeholder.com/600x400?text=Image+Not+Available";
                  }}
                />
                <div className="card-content">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default App;
