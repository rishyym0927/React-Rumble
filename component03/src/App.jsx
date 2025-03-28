import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import DynamicTable from './components/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DynamicTable/>
    </>
  )
}

export default App
