import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModalComponent from './components/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ModalComponent/>
    </>
    )
}

export default App
