import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const DynamicTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');

  // Function to fetch and parse CSV data
  useEffect(() => {
    Papa.parse('/Data.csv', {
      download: true,
      header: true,
      complete: (result) => {
        setData(result.data);
        setFilteredData(result.data);
      },
    });
  }, []);

  // Sorting function
  const sortData = (column) => {
    const sortedData = [...filteredData];
    const order = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(order);
    sortedData.sort((a, b) => {
      if (a[column] < b[column]) return order === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return order === 'asc' ? 1 : -1;
      return 0;
    });
    setFilteredData(sortedData);
  };

  // Search function
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = data.filter((row) =>
      Object.values(row).some((value) =>
        value.toLowerCase().includes(query)
      )
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: '10px', padding: '8px' }}
      />

      {/* Table */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            {data[0] && Object.keys(data[0]).map((column) => (
              <th key={column}>
                {column}
                <button onClick={() => sortData(column)}>
                  {sortOrder === 'asc' ? '🔼' : '🔽'}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="100%">No data found</td>
            </tr>
          ) : (
            filteredData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
