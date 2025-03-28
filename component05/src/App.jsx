import React, { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";
import { motion } from "framer-motion";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData({
        text: "This is the actual content that was loaded!",
        image: "data:image/jpeg;base64,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", // Sample image
        card: { title: "Loaded Card Title", description: "This is the card description." },
      });
    }, 3000); // Simulating API delay
  }, []);

  return (
    <div className="app-container">
      <h2>Skeleton Loader Example</h2>

      {/* Text Loader */}
      <div className="section">
        <h3>Text</h3>
        {data ? (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            {data.text}
          </motion.p>
        ) : (
          <SkeletonLoader type="text" />
        )}
      </div>

      {/* Image Loader */}
      <div className="section">
        <h3>Image</h3>
        {data ? (
          <motion.img
            src={data.image}
            alt="Loaded"
            className="image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        ) : (
          <SkeletonLoader type="image" />
        )}
      </div>

      {/* Card Loader */}
      <div className="section">
        <h3>Card</h3>
        {data ? (
          <motion.div className="card" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <h4>{data.card.title}</h4>
            <p>{data.card.description}</p>
          </motion.div>
        ) : (
          <SkeletonLoader type="card" />
        )}
      </div>
    </div>
  );
};

export default App;
