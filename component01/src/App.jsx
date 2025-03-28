import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal, { useModal } from './components/Modal/Modal'

function App() {
  const [count, setCount] = useState(0)
  const { isOpen, openModal, closeModal } = useModal()

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
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <button 
          onClick={openModal} 
          style={{
            marginTop: '1rem',
            padding: '0.6rem 1.2rem',
            background: 'linear-gradient(90deg, #646cff 0%, #9a4dff 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: '500',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 8px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          }}
        >
          Open React Rumble Modal
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {isOpen && (
        <Modal title="⚡ React Rumble Challenge ⚡" onClose={closeModal}>
          <p>Welcome to the ultimate coding showdown!</p>
          <p>Current power level: <strong style={{ color: '#9a4dff' }}>{count}</strong></p>
          <div style={{ 
            marginTop: '1.5rem',
            display: 'flex',
            gap: '1rem'
          }}>
            <button 
              onClick={() => {
                setCount(c => c + 10);
              }}
              style={{
                padding: '0.6rem 1.2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: '1px solid #646cff',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Boost Power (+10)
            </button>
            <button 
              onClick={closeModal}
              style={{
                padding: '0.6rem 1.2rem',
                background: 'linear-gradient(90deg, #646cff 0%, #9a4dff 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              Accept Challenge
            </button>
          </div>
        </Modal>
      )}
    </>
  )
}

export default App