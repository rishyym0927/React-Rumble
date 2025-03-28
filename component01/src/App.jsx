// import React, { useState } from "react";
// import Modal from "./component/Modal";
// import "./App.css";

// function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="App">
//       <h1>React Modal Example</h1>
//       <button className="open-btn" onClick={openModal}>
//         Open Modal
//       </button>

//       <Modal isOpen={isModalOpen} onClose={closeModal} title="Welcome!">
//         <p>This is a sample modal created using React.</p>
//       </Modal>
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import Modal from "./component/Modal";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Toggle Dark/Light Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : ""}`}>
      <h1>🚀 Advanced React Modal</h1>
      <button className="open-btn" onClick={openModal}>
        Open Modal
      </button>
      <button className="mode-toggle" onClick={toggleDarkMode}>
        {isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Welcome to Advanced Modal"
        autoCloseTime={5000} // Auto close after 5 seconds
        preventCloseOnOverlayClick={true}
      >
        <p>
          This modal has auto-close functionality, draggable behavior, and
          advanced styling. Enjoy building!
        </p>
      </Modal>
    </div>
  );
}

export default App;
