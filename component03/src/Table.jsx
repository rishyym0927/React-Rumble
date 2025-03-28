import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import './DynamicTable.css';

const DynamicTable = () => {
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadCSVFile = async () => {
      try {
        const response = await fetch('../Data.csv');
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const parsedData = results.data.map(row => {
              const parsedRow = { ...row };
              Object.keys(parsedRow).forEach(key => {
                const numValue = Number(parsedRow[key]);
                if (!isNaN(numValue) && parsedRow[key].trim() !== '') {
                  parsedRow[key] = numValue;
                }
              });
              return parsedRow;
            });

            setTableData(parsedData);
            setFilteredData(parsedData);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
          }
        });
      } catch (error) {
        console.error('Error loading CSV file:', error);
      }
    };

    loadCSVFile();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFilteredData(
        tableData.filter(row => 
          Object.values(row).some(value => 
            String(value).toLowerCase().includes(searchTerm)
          )
        )
      );
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [searchTerm, tableData]);

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedData = [...filteredData].sort((a, b) => {
      const valueA = typeof a[key] === 'string' ? a[key].toLowerCase() : a[key];
      const valueB = typeof b[key] === 'string' ? b[key].toLowerCase() : b[key];
      
      if (valueA < valueB) return direction === 'ascending' ? -1 : 1;
      if (valueA > valueB) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setFilteredData(sortedData);
    setSortConfig({ key, direction });
  };

  const exportToCSV = () => {
    if (tableData.length === 0) return;

    const headers = Object.keys(tableData[0]);
    const csvContent = [
      headers.join(','),
      ...tableData.map(row => headers.map(header => row[header]).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'exported_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="dynamic-table-container">
      <div className="table-header">
        <h2>Dynamic CSV Table</h2>
        <button onClick={exportToCSV} className="export-btn">
          Export CSV
        </button>
      </div>

      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search in table..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          className="search-input"
        />
      </div>

      {tableData.length > 0 ? (
        <div className="table-wrapper">
          <table className="dynamic-table">
            <thead>
              <tr>
                {Object.keys(tableData[0]).map((header) => (
                  <th 
                    key={header} 
                    onClick={() => handleSort(header)}
                    className="sortable-header"
                  >
                    {header}
                    <span className="sort-icon">
                      {sortConfig.key === header ? (sortConfig.direction === 'ascending' ? '▲' : '▼') : '▼'}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.values(row).map((value, cellIndex) => (
                    <td key={`${rowIndex}-${cellIndex}`}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="loading-message">Loading data...</div>
      )}
    </div>
  );
};

export default DynamicTable;
