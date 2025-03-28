import React, { useState, useEffect } from "react";
import Papa from "papaparse";

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [search, setSearch] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("/data.csv")
      .then((response) => response.text())
      .then((csvText) => {
        const parsedData = Papa.parse(csvText, { header: true }).data;
        if (parsedData.length > 0) {
          setColumns(Object.keys(parsedData[0])); // Extract column names
          setData(parsedData);
        }
      });
  }, []);

  // Sorting function
  const handleSort = (column) => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[column].localeCompare(b[column], undefined, { numeric: true });
      } else {
        return b[column].localeCompare(a[column], undefined, { numeric: true });
      }
    });

    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setSortColumn(column);
    setData(sortedData);
  };

  // Filter Data Based on Search Input
  const filteredData = data.filter((row) =>
    columns.some((col) => row[col]?.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      <h2>📊 Dynamic Table</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} onClick={() => handleSort(col)}>
                {col} {sortColumn === col ? (sortOrder === "asc" ? "🔼" : "🔽") : ""}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
