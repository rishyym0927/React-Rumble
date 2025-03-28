import React, { useState } from "react";
import Papa from "papaparse";
import "./DynamicTable.css"; // Import styles

const DynamicTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAsc, setSortAsc] = useState(true);

  // Handle CSV Upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      complete: (result) => {
        setData(result.data.slice(1)); // Remove header
      },
      header: true,
      skipEmptyLines: true,
    });
  };

  // Sort Data
  const handleSort = (column) => {
    const sortedData = [...data].sort((a, b) =>
      sortAsc
        ? a[column].localeCompare(b[column])
        : b[column].localeCompare(a[column])
    );
    setSortAsc(!sortAsc);
    setData(sortedData);
  };

  // Search Filter
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="table-container">
      <h2>📊 Dynamic Table</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <input
        type="text"
        placeholder="🔍 Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key} onClick={() => handleSort(key)}>
                  {key} {sortAsc ? "▲" : "▼"}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((val, idx) => (
                  <td key={idx}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>📂 Upload a CSV file to display data.</p>
      )}
    </div>
  );
};

export default DynamicTable;
