import React from "react";
import Modal from "./components/modal";
import ThemeToggle from "./components/ThemeToggle";
import DynamicTable from "../../component03/src/components/DynamicTable";
import Skeleton from "./components/Skeleton";
function App() {
  return (
    <div className="app">
      <h1>React Rumble App</h1>
      <ThemeToggle />
      <DynamicTable />
      <Modal />
      <Skeleton type="card" />
    </div>
  );
}

export default App;
