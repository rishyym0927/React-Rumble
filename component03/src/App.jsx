import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DynamicTable from "./table";
import ThemeToggle from './table';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DynamicTable />
      <ThemeToggle />
    </>
  )
}

export default App
