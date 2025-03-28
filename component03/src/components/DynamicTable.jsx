import React, { useState, useEffect } from "react";
import Papa from "papaparse";

function DynamicTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("/data.csv") // Ensure 'data.csv' is in 'public/' folder
      .then((response) => response.text())
      .then((text) => {
        const parsedData = Papa.parse(text, { header: true }).data;
        setData(parsedData);
      });
  }, []);

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => 
      sortOrder === "asc" ? a["Model Name"].localeCompare(b["Model Name"]) : b["Model Name"].localeCompare(a["Model Name"])
    );
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredData = data.filter(row =>
    row["Model Name"]?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSort} className="sort-button">Sort</button>
      <table className="data-table">
        <thead>
          <tr>
            <th onClick={handleSort}>Model Name</th>
            <th>Company Name</th>
            <th>RAM</th>
            <th>Battery</th>
            <th>Launched Year</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td>{row["Model Name"]}</td>
              <td>{row["Company Name"]}</td>
              <td>{row["RAM"]}</td>
              <td>{row["Battery Capacity"]}</td>
              <td>{row["Launched Year"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DynamicTable;
