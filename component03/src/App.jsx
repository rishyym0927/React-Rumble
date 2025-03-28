import React from "react";
import DynamicTable from "./DynamicTable";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>📊 Interactive Dynamic Table</h2>
      <DynamicTable csvFile="/data.csv" />
    </div>
  );
}

export default App;
