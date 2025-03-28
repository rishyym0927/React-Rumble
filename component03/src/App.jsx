import React from 'react';
import DynamicTable from './Table';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CSV Data Viewer</h1>
      </header>
      
      <main className="app-main">
        <DynamicTable />
      </main>
      
      <footer className="app-footer">
        <p>© 2024 Dynamic Table Application</p>
      </footer>
    </div>
  );
}

export default App;