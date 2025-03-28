import React, { useState, useEffect } from 'react';
import Papa from 'papaparse'; // Library to parse CSV files
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: '', direction: 'ascending' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch and parse the CSV file
    Papa.parse('./data.csv', {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
        setFilteredData(results.data);
      },
    });
  }, []);

  useEffect(() => {
    // Filter data based on search term
    const filtered = data.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [searchTerm, data]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    let sortableData = [...filteredData];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [filteredData, sortConfig]);

  return (
    <div className="app">
      <h1>Dynamic Table</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <table>
        <thead>
          <tr>
            {Object.keys(data[0] || {}).map((key) => (
              <th key={key} onClick={() => requestSort(key)} className="sortable">
                {key}
                {sortConfig.key === key && (sortConfig.direction === 'ascending' ? ' ↑' : ' ↓')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
