import React, { useState } from "react";
import Papa from "papaparse";

const App = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Handle CSV Upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        setData(results.data);
      },
    });
  };

  // Handle Sorting
  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => {
      const aValue = Object.values(a)[0]; // Sorting by the first column
      const bValue = Object.values(b)[0];
      return sortOrder === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Handle Search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter Data Based on Search Query
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(searchQuery)
    )
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dynamic Table Component</h1>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        style={{ marginBottom: "10px" }}
      />
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearch}
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <button onClick={handleSort} style={{ marginBottom: "10px" }}>
        Sort ({sortOrder === "asc" ? "Ascending" : "Descending"})
      </button>
      <table border="1" style={{ width: "100%", marginTop: "10px" }}>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, idx) => (
                <td key={idx}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;