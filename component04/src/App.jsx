import React from "react";
import Accordion from "./Accordion";

const faqData = [
  { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
  { question: "Why use React?", answer: "React makes it painless to create interactive UIs efficiently." },
  { question: "How does state work?", answer: "State is a built-in object that stores property values that belong to a component." },
];

const App = () => {
  return (
    <div className="app-container">
      <h2>Frequently Asked Questions</h2>
      <Accordion data={faqData} allowMultiple={true} />
    </div>
  );
};

export default App;
