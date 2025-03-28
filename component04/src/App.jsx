import React from "react";
import Accordion from "./Accordion";

const faqItems = [
  { title: "What is React?", content: "React is a JavaScript library for building UI." },
  { title: "What is Vite?", content: "Vite is a modern frontend build tool." },
  { title: "How does an accordion work?", content: "It expands and collapses sections of content." }
];

const App = () => {
  return (
    <div>
      <h2>FAQ Section</h2>
      <Accordion items={faqItems} allowMultiple={true} />
    </div>
  );
};

export default App;
