import { useState, useEffect } from 'react';
import './App.css';
import Papa from 'papaparse';

function App() {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/data.csv') // Ensure data.csv is in the public folder
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: (result) => setData(result.data)
        });
      });
  }, []);

  const sortData = () => {
    const sortedData = [...data].sort((a, b) => {
      if (!a["Company Name"] || !b["Company Name"]) return 0;
      return sortOrder === 'asc' 
        ? a["Company Name"].localeCompare(b["Company Name"]) 
        : b["Company Name"].localeCompare(a["Company Name"]);
    });
    setData(sortedData);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="app-container">
      <h1>Mobile Specifications Table</h1>
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <button onClick={sortData} className="sort-button">
          Sort {sortOrder === 'asc' ? '⬆️' : '⬇️'}
        </button>
      </div>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Model</th>
            <th>Weight</th>
            <th>RAM</th>
            <th>Front Camera</th>
            <th>Back Camera</th>
            <th>Processor</th>
            <th>Battery</th>
            <th>Screen Size</th>
            <th>Price (India)</th>
            <th>Launch Year</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter(row => 
              Object.values(row).some(value => 
                value && value.toString().toLowerCase().includes(searchTerm)
              )
            )
            .map((row, index) => (
              <tr key={index}>
                <td>{row["Company Name"] || 'N/A'}</td>
                <td>{row["Model Name"] || 'N/A'}</td>
                <td>{row["Mobile Weight"] || 'N/A'}</td>
                <td>{row["RAM"] || 'N/A'}</td>
                <td>{row["Front Camera"] || 'N/A'}</td>
                <td>{row["Back Camera"] || 'N/A'}</td>
                <td>{row["Processor"] || 'N/A'}</td>
                <td>{row["Battery Capacity"] || 'N/A'}</td>
                <td>{row["Screen Size"] || 'N/A'}</td>
                <td>{row["Launched Price (India)"] || 'N/A'}</td>
                <td>{row["Launched Year"] || 'N/A'}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;



