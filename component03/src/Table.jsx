import React, { useState } from "react";
import Papa from "papaparse";
import "./index.css"; // Ensure styles are applied

const Table = () => {
  const [data, setData] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle CSV Upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => setData(result.data),
    });
  };

  // Sorting function
  const handleSort = (column) => {
    const sortedData = [...data].sort((a, b) => {
      if (a[column] < b[column]) return sortAsc ? -1 : 1;
      if (a[column] > b[column]) return sortAsc ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortAsc(!sortAsc);
  };

  // Search filtering
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="table-container">
      <input
        type="file"
        accept=".csv"
        className="upload-btn"
        onChange={handleFileUpload}
      />
      <input
        type="text"
        className="search-box"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((col, index) => (
                <th key={index} onClick={() => handleSort(col)}>
                  {col} {sortAsc ? "▲" : "▼"}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((cell, colIndex) => (
                  <td key={colIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data">Upload a CSV file to display data.</p>
      )}
    </div>
  );
};

export default Table;
