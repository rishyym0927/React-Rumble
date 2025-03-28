import React from "react";
import DataComponent from "./components/DataComponent";
import "./components/SkeletonLoader.css"; // ✅ Import Skeleton CSS globally

function App() {
  return (
    <div>
      <DataComponent />
    </div>
  );
}

export default App;
