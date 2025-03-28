import { useState } from 'react'
import Modal from './Modal'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="app-container">
      <h1>✨ Glassmorphic Modal Demo</h1>
      <button onClick={() => setIsModalOpen(true)} className="open-modal-btn">
        Open Glass Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome to Glass Modal"
      >
        <div className="modal-content-demo">
          <h3>✨ Features</h3>
          <ul>
            <li>Glassmorphic design with blur effects</li>
            <li>Smooth animations on open/close</li>
            <li>Custom scrollbar styling</li>
            <li>Mobile-responsive layout</li>
            <li>Escape key support</li>
            <li>Click outside to close</li>
          </ul>
          
          <h3>🎨 Styling</h3>
          <p>This modal features a unique glass-like appearance with:</p>
          <ul>
            <li>Backdrop blur effects</li>
            <li>Semi-transparent background</li>
            <li>Subtle border glow</li>
            <li>Animated close button</li>
          </ul>
        </div>
      </Modal>
    </div>
  )
}

export default App;