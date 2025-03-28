import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';


const TableComponent = () => {
    
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortAscending, setSortAscending] = useState(true);
  const [sortColumn, setSortColumn] = useState(null);

  // Function to handle CSV file upload and parsing
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          const parsedData = result.data;
          setData(parsedData);
          setFilteredData(parsedData); // Initialize with all data
        },
        header: true, // Treat the first row as headers
      });
    }
  };
  const loadDefaultCSV = () => {
    fetch('/Data.csv')
      .then((response) => response.text())
      .then((csvData) => {
        Papa.parse(csvData, {
          complete: (result) => {
            const parsedData = result.data;
            setData(parsedData);
            setFilteredData(parsedData); // Initialize with default data
          },
          header: true,
        });
      })
      .catch((error) => {
        console.error('Error loading default CSV:', error);
      });
  };

  // Load the default CSV when the component mounts
  useEffect(() => {
    loadDefaultCSV();
  }, []); // Empty dependency array ensures it runs only once


  // Function to handle sorting
  const handleSort = (column) => {
    const isAscending = sortColumn === column && sortAscending;
    setSortColumn(column);
    setSortAscending(!isAscending);

    const sortedData = [...filteredData].sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];

      if (aValue < bValue) return isAscending ? 1 : -1;
      if (aValue > bValue) return isAscending ? -1 : 1;
      return 0;
    });
    
    setFilteredData(sortedData);
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filtered = data.filter((row) => {
      return Object.values(row).some((val) =>
        val.toString().toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredData(filtered);
  };

  useEffect(() => {
    // Update filtered data on search term change
    handleSearchChange({ target: { value: searchTerm } });
  }, [searchTerm]);

  // Extract headers from the first data row
  const headers = data.length ? Object.keys(data[0]) : [];

  return (
    <div>
      {/* File upload to import CSV */}
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        style={{ marginBottom: '20px' }}
      />

      {/* Search input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '20px', padding: '10px' }}
      />

      {/* Table */}
      {data.length > 0 ? (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} onClick={() => handleSort(header)}>
                  {header}
                  {sortColumn === header && (sortAscending ? ' ↑' : ' ↓')}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                {headers.map((header) => (
                  <td key={header}>{row[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available. Please upload a CSV file.</p>
      )}
    </div>
  );
};

export default TableComponent;
