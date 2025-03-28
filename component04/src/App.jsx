// src/App.js
import React from "react";
import Accordion from "./components/Accordion";
import "./App.css";

function App() {
  const faqData = [
    {
      id: 1,
      question: "🔥 What is React?",
      answer:
        "React is an open-source JavaScript library for building user interfaces, especially for single-page applications.",
    },
    {
      id: 2,
      question: "⚡ Why use React?",
      answer:
        "React allows developers to create large web applications that can update and render efficiently without reloading the page.",
    },
    {
      id: 3,
      question: "🎨 How do hooks work in React?",
      answer:
        "Hooks let you use state and other React features without writing a class. Some common hooks are useState, useEffect, and useContext.",
    },
    {
      id: 4,
      question: "📚 What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write UI components in a declarative way.",
    },
  ];

  return (
    <div className="app">
      <h1>🎭 Advanced FAQ Section</h1>
      <Accordion items={faqData} allowMultipleOpen={true} />
    </div>
  );
}

export default App;
