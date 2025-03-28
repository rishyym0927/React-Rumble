import React from "react";
import SkeletonCard from "./components/SkeletonCard";
import "./App.css"; // Import global styles

const App = () => {
  return (
    <div className="app-container">
      <SkeletonCard />
    </div>
  );
};

export default App;
