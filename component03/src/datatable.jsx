import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import dataCSV from "../data/data.csv";
import "./DataTable.css";

function DataTable() {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch(dataCSV)
      .then(response => response.text())
      .then(csvData => {
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: function (result) {
            setData(result.data);
          },
        });
      });
  }, []);

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      return sortOrder === "asc"
        ? a.Name.localeCompare(b.Name)
        : b.Name.localeCompare(a.Name);
    });

    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredData = data.filter(item =>
    item.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="table-container">
      <input
        type="text"
        placeholder="🔍 Search by name..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSort} className="sort-btn">
        Sort {sortOrder === "asc" ? "🔼" : "🔽"}
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((row, index) => (
              <tr key={index}>
                <td>{row.ID}</td>
                <td>{row.Name}</td>
                <td>{row.Age}</td>
                <td>{row.City}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No matching records found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
