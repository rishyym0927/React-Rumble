import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './App.css';

function Table() {
  const [data, setData] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('/Data.csv')
      .then(response => response.text())
      .then(csvText => {
        console.log("Raw CSV Data:", csvText); // Debugging
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            console.log("Parsed Data:", result.data); // Debugging
            setData(result.data);
          }
        });
      })
      .catch(error => console.error("Error loading CSV:", error));
  }, []);
  

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => 
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setData(sortedData);
    setSortAsc(!sortAsc);
  };

  const filteredData = data.filter(item =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="table-container">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSort}>Sort {sortAsc ? '🔼' : '🔽'}</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Dynamic Table with CSV Import</h1>
      <Table />
    </div>
  );
}

export default App;

