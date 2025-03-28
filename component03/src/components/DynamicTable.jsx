import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./DynamicTable.css";

const DynamicTable = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [columns, setColumns] = useState([]);

  // Load CSV Data
  useEffect(() => {
    fetch("/Data.csv") // Since it's in `public/`
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch CSV");
        return response.text();
      })
      .then((csvData) => {
        console.log("📌 Raw CSV Data:", csvData.slice(0, 200)); // First 200 chars
        Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            console.log("📌 Parsed CSV Data:", result.data);
            setData(result.data);
            setColumns(result.meta.fields); // Extract column names dynamically
          },
        });
      })
      .catch((error) => console.error("❌ Error loading CSV:", error));
  }, []);

  // Sort Data
  const sortData = () => {
    const sortedData = [...data].sort((a, b) => {
      const aValue = a["Model Name"]?.toLowerCase() || ""; // Adjusted for column name
      const bValue = b["Model Name"]?.toLowerCase() || "";
      return sortOrder === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Filter Data by Search Query (searching in "Model Name")
  const filteredData = data.filter((row) =>
    (row["Model Name"]?.toLowerCase() || "").includes(searchQuery.toLowerCase())
  );

  return (
    <div className="table-container">
      <h2>📊 Mobile Phone Data</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="🔍 Search by Model Name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-box"
      />

      {/* Sort Button */}
      <button onClick={sortData} className="sort-btn">
        {sortOrder === "asc" ? "🔼 Sort Ascending" : "🔽 Sort Descending"}
      </button>

      {/* Check if data is empty */}
      {filteredData.length === 0 ? (
        <p className="no-data">⚠️ No matching records found!</p>
      ) : (
        <table>
          <thead>
            <tr>
              {columns.map((col, index) => (
                <th key={index}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                {columns.map((col, colIndex) => (
                  <td key={colIndex}>{row[col] || "N/A"}</td>
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
