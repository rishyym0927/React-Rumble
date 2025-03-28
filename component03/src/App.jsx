import React, { useState } from 'react';
import Papa from 'papaparse';

const DynamicTable = () => {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');

  // Handle CSV file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setData(results.data);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
      }
    });
  };

  // Sorting functionality
  const requestSort = () => {
    let direction = 'asc';
    if (sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ direction });
  };

  // Search functionality
  const filteredData = data.filter(row =>
    Object.values(row).some(value =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Sorting logic
  const sortedData = [...filteredData].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];
    
    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="table-container">
      <div className="controls">
        <input
          type="file"
          accept=".csv"
          onChange={handleFileUpload}
          className="file-input"
        />
        
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        
        <button onClick={requestSort} className="sort-btn">
          Sort {sortConfig.direction === 'asc' ? 'Descending' : 'Ascending'}
        </button>
      </div>

      {data.length > 0 ? (
        <table className="data-table">
          <thead>
            <tr>
              {Object.keys(data[0]).map((header) => (
                <th key={header}>{header}</th>
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
      ) : (
        <p className="upload-prompt">Upload a CSV file to begin</p>
      )}
    </div>
  );
};

export default DynamicTable;