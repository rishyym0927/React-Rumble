import React, { useState, useEffect } from "react";
import Skeleton from "./components/Skeleton";

const App = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    setTimeout(() => {
      setData({
        title: "React Skeleton Loader",
        image: "https://picsum.photos/200",
        text: "This is a demo of skeleton loading animation in React.",
      });
    }, 3000); // Simulating API delay
  }, []);

  return (
    <div className="container">
      {data ? (
        <div className="card">
          <img src={data.image} alt="Loaded" />
          <h3>{data.title}</h3>
          <p>{data.text}</p>
        </div>
      ) : (
        <div className="card">
          <Skeleton type="image" />
          <Skeleton type="title" />
          <Skeleton type="text" />
        </div>
      )}
    </div>
  );
};

export default App;
