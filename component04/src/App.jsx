import React from "react";
import Accordion from "./components/Accordion";
import ThemeToggle from "./components/ThemeToggle";
import "./styles.css";

const App = () => {
  return (
    <div className="app">
      <ThemeToggle />
      <Accordion />
    </div>
  );
};

export default App;
