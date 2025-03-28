import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// 1) Import the Modal component
import Modal from "./Modal";

function App() {
  const [count, setCount] = useState(0);

  // 2) Track whether modal is open or not
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 3) Functions to open/close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>

      {/* 4) Add a button to open the modal */}
      <button onClick={openModal} style={{ marginTop: "1rem" }}>
        Open Modal
      </button>

      {/* 5) Render the modal conditionally */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="My Awesome Modal"
      >
        <p>This is the body of the modal!</p>
        <p>You can put any content you want here.</p>
      </Modal>
    </>
  );
}

export default App;
