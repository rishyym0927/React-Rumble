import React from "react";
import Accordion from "./components/Accordion";

export default function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "2rem", marginBottom: "20px" }}>
        FAQ Section
      </h1>
      <Accordion />
    </div>
  );
}
