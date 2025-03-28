import React from "react";
import Accordion from "./components/Accordion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Accordion allowMultiple={true} />  {/* Change to false for single open item */}
    </div>
  );
}

export default App;
