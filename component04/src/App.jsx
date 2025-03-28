import React from "react";
import Accordion from "./Accordion";

const faqData = [
  { question: "What is React?", answer: "React is a JavaScript library for building UI." },
  { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript." },
  { question: "What is a Component?", answer: "A component is a reusable piece of UI in React." },
];

function App() {
  return (
    <div>
      <h1>FAQs</h1>
      <Accordion items={faqData} />
    </div>
  );
}

export default App;
