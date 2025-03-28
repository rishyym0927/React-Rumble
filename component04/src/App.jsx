import React from "react";
import Accordion from "./components/Accordion";
import "./App.css";

function App() {
  const faqItems = [
    {
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces. It lets you create reusable UI components and manage their state efficiently.",
    },
    {
      title: "How do I get started with React?",
      content:
        "To get started with React, you can create a new project using Create React App or Vite. Then, you can start building components and learning about React's core concepts like props, state, and lifecycle methods.",
    },
    {
      title: "What are React Hooks?",
      content:
        "React Hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 and include useState, useEffect, useContext, and more.",
    },
    {
      title: "What is JSX?",
      content:
        "JSX is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It makes it easier to create and visualize the structure of your React components.",
    },
  ];

  return (
    <div className="app">
      <h1>Frequently Asked Questions</h1>
      <Accordion items={faqItems} allowMultiple={true} />
    </div>
  );
}

export default App;
