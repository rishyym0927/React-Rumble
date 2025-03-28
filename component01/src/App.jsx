import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Modal from "./components/Modal";
import DarkModeToggle from "./components/DarkModeToggle";
import DynamicTable from "./components/DynamicTable";
import Accordion from "./components/Accordion";
import SkeletonLoading from "./components/SkeletonLoading";
import './App.css';

function Home() {
  return <h1>Welcome to React Rumble!</h1>;
}

function About() {
  return <h1>About React Rumble</h1>;
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const faqItems = [
    { title: 'What is React Rumble?', content: 'It is a coding duel challenge.' },
    { title: 'How do I submit my work?', content: 'Fork, clone, commit, push and PR.' },
  ];

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <header>
              <h1>React Rumble Challenge</h1>
              <DarkModeToggle />
            </header>

            <section>
              <h2>Modal Demo</h2>
              <button onClick={() => setModalOpen(true)}>Open Modal</button>
              <Modal title="Welcome!" isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <p>This is the modal content.</p>
              </Modal>
            </section>

            <section>
              <h2>Dynamic Table Demo</h2>
              {/* Replace '/data/sample.csv' with your CSV file location */}
              <DynamicTable csvUrl="/data/sample.csv" />
            </section>

            <section>
              <h2>Accordion / FAQ Demo</h2>
              <Accordion items={faqItems} />
            </section>

            <section>
              <h2>Skeleton Loading Demo</h2>
              <SkeletonLoading shape="text" width="80%" height="1.5em" />
              <SkeletonLoading shape="image" width="100px" height="100px" />
            </section>
          </div>
        }
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;

const dependencies = {
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react-swc": "^3.8.1"
  },
  "scripts": {
    "dev": "vite"
  }
};
