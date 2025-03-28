import React from "react";
import Accordion from "./Accordion";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App = () => {
  const faqItems = [
    { title: "What is React?", content: "React is a JavaScript library for building user interfaces." },
    { title: "Why use React?", content: "React is flexible, efficient, and allows for building reusable components." },
    { title: "How do I use React?", content: "You can use React by creating components and managing state and props." },
  ];

  return (
    <>
      
      <div>
        <h1>FAQ Section</h1>
        <Accordion items={faqItems} allowMultipleOpen={true} />
      </div>
    </>
  );
};

export default App;
