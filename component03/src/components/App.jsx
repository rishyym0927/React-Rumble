import React from "react";
import DynamicTable from "./DynamicTable.jsx"; // Ensure this path is correct
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="main-heading">📱 Mobile Price Comparison</h1>
      <p className="sub-heading">
        Find the latest mobile prices across different regions!
      </p>
      <DynamicTable />
    </div>
  );
};


export default App;
