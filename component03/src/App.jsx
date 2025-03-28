import React from 'react';
import { Table } from './components/Table';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Dynamic Table</h1>
        <Table />
      </div>
    </div>
  );
}

export default App;