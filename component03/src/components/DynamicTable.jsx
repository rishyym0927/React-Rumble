import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./DynamicTable.css";

const DynamicTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [headers, setHeaders] = useState([]);

  useEffect(() => {
    // Load the CSV file when component mounts
    fetch('/Data.csv')
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          complete: (results) => {
            const parsedData = results.data;
            setHeaders(parsedData[0]);
            setData(parsedData.slice(1));
            setFilteredData(parsedData.slice(1));
          },
          header: false,
          skipEmptyLines: true,
          error: (error) => {
            console.error("Error parsing CSV:", error);
          }
        });
      })
      .catch(error => {
        console.error("Error loading CSV file:", error);
      });
  }, []);

  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = data.filter((row) =>
      row.some((cell) => cell.toLowerCase().includes(term))
    );
    setFilteredData(filtered);
  };

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sortedData = [...filteredData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setFilteredData(sortedData);
  };

  return (
    <div className="dynamic-table-container">
      <div className="controls">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {headers.length > 0 && (
        <table className="dynamic-table">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} onClick={() => handleSort(index)}>
                  {header}
                  {sortConfig.key === index && (
                    <span className="sort-icon">
                      {sortConfig.direction === "asc" ? " ↑" : " ↓"}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DynamicTable;
