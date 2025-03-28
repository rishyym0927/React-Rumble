// src/DataTable.jsx
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import './DataTable.css'; // We'll create this CSS file next

export default function DataTable() {
  const [data, setData] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch and parse CSV on mount
  useEffect(() => {
    fetch('/Data.csv')
      .then((res) => res.text())
      .then((csvString) => {
        const parsed = Papa.parse(csvString, { header: true });
        setData(parsed.data);
      })
      .catch((err) => console.error('Error loading CSV:', err));
  }, []);

  // Toggle sorting by "name"
  const handleSort = () => {
    setSortAsc((prev) => !prev);
    setData((prevData) => {
      const sorted = [...prevData].sort((a, b) => {
        // Ensure these fields are strings for .localeCompare
        const nameA = a.name?.toString() || '';
        const nameB = b.name?.toString() || '';
        return sortAsc ? nameB.localeCompare(nameA) : nameA.localeCompare(nameB);
      });
      return sorted;
    });
  };

  // Filter rows by "name"
  const filteredData = data.filter((row) =>
    row.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-container">
      <h2>Dynamic Table Example</h2>

      <div className="controls">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSort} className="sort-button">
          Sort {sortAsc ? 'Descending' : 'Ascending'}
        </button>
      </div>

      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, idx) => (
            <tr key={idx}>
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
