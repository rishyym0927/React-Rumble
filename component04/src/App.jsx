import React from "react";
import Accordion from "./Accordion";

function App() {
  const items = [
    { title: "🚀 What is React?", content: "React is a JavaScript library for building user interfaces." },
    { title: "🎨 Why use React?", content: "It makes building interactive UIs easy with components." },
    { title: "📌 How does React work?", content: "React uses a virtual DOM for efficient updates." },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "50px", marginLeft: "550px" }}>
      <h2>Interactive Accordion</h2>
      <Accordion items={items} allowMultiple={true} />
    </div>
  );
}

export default App;
