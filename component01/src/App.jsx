import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ModalButton from './components/modal-button'

function App() {

  return (
    <>
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <header className="App-header">
          <h1 className='font-semibold mb-2 text-sky-600'>Click to Open the Modal</h1>
        </header>
        <main className='flex justify-center items-center'>
          <ModalButton Header={"Modal Header"} Body={"This is the Modal Content, Click on the cross to close the Modal"}/>
        </main>
      </div>
    </>
  )
}

export default App
