import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeToggle from './toggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ThemeToggle />
    </>
  )
}

export default App
