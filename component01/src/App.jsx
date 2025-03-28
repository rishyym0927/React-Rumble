import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Modal from "./Modal"; // Importing the new Modal component

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
      </div>

      <button onClick={() => setIsModalOpen(true)}>Open Modal</button> {/* Open Modal Button */}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="My Modal">
        <p>This is a modal inside your Vite + React project!</p>
      </Modal>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
