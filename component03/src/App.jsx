import React from "react";
import DataTable from "./components/DataTable";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <h1>📊 Dynamic Table with CSV Import</h1>
      <DataTable />
    </div>
  );
}

export default App;
