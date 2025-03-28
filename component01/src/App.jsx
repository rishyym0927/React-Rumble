import { useState } from "react";
import "./App.css"; 
const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {}
      <button onClick={() => setIsOpen(true)}>Open Modal</button>

      {}
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Welcome!</h2>
              <button className="close-button" onClick={() => setIsOpen(false)}>✖</button>
            </div>
            <div className="modal-body">
              <p>This is a simple modal popup.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
