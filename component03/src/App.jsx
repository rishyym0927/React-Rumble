import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DynamicTable from "./components/DynamicTable/DynamicTable.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <h1>Dynamic Table Demo</h1>
      <DynamicTable />
    </div>
  )
}

export default App
