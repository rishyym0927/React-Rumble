import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import ThemeSwitcher from './components/ThemeSwitcher.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeSwitcher>
        <App />
      </ThemeSwitcher>
    </BrowserRouter>
  </StrictMode>,
)
