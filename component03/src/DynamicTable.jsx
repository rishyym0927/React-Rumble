import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./DynamicTable.css";

const DynamicTable = ({ csvFile }) => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(csvFile)
      .then((response) => response.text())
      .then((text) => {
        Papa.parse(text, {
          header: true,
          dynamicTyping: true,
          complete: (result) => {
            console.log("CSV Data Loaded:", result.data); // Debugging
            if (result.data.length > 0) {
              setData(result.data);
            }
          },
        });
      })
      .catch((error) => console.error("Error loading CSV:", error));
  }, [csvFile]);

  const handleSort = (key) => {
    if (!data.length) return;

    const sortedData = [...data].sort((a, b) => {
      if (typeof a[key] === "string") {
        return sortOrder === "asc"
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key]);
      }
      return sortOrder === "asc" ? a[key] - b[key] : b[key] - a[key];
    });

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setData(sortedData);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="table-container">
      <input
        type="text"
        placeholder="🔍 Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      {filteredData.length > 0 ? (
        <table className="dynamic-table">
          <thead>
            <tr>
              {Object.keys(filteredData[0]).map((key) => (
                <th key={key} onClick={() => handleSort(key)}>
                  {key} ⬍
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((cell, i) => (
                  <td key={i}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data">⚠️ No data available</p>
      )}
    </div>
  );
};

export default DynamicTable;
