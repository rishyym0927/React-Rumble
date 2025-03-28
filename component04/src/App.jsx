import React from "react";
import Accordion from "./components/Accordion";

function App() {
  const faqData = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "How does useState work?", answer: "useState is a React Hook that allows you to add state to functional components." },
    { question: "Is React good for beginners?", answer: "Yes! React is beginner-friendly and widely used in the industry." }
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>FAQ Section</h1>
      <Accordion items={faqData} allowMultipleOpen={true} />
    </div>
  );
}

export default App;
