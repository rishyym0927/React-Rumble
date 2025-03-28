import React, { useState } from "react";
import Modal from "./Modal";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>📦 Modal Component</h1>
            <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

            {/* Modal Component */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="My Modal">
                <p>This is a sample modal content.</p>
            </Modal>
        </div>
    );
}

export default App;
