import * as React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

const viteLogo = '/vite.svg';

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => setCount((count: number) => count + 1)}
          style={{ backgroundColor: count % 2 === 0 ? 'lightblue' : 'lightcoral' }}
        >
          count is {count}
        </button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
