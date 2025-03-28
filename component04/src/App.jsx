// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React from "react";
import Accordion from "./accordion";

const faqItems = [
  { question: "What is React?", answer: "React is a JavaScript library for building UIs." },
  { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript used in React." },
  { question: "How does useState work?", answer: "useState is a Hook that lets you add state to a function component." },
];

function App() {
  return (
    <div>
      <h1>FAQ Section</h1>
      <Accordion items={faqItems} allowMultiple={true} />
    </div>
  );
}

export default App;

