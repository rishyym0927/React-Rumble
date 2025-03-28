import React, { useState, useEffect } from "react";
import Papa from "papaparse";

function DynamicTable() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("/component03/data.csv") // ✅ Load CSV from outside src
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true, // ✅ Converts CSV into objects
          skipEmptyLines: true,
          complete: (result) => {
            setData(result.data);
            setFilteredData(result.data);
          },
        });
      });
  }, []);

  // ✅ Sort function
  const handleSort = (key) => {
    const sortedData = [...filteredData].sort((a, b) => {
      return sortOrder === "asc"
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    });
    setFilteredData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // ✅ Search function
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredData(
      data.filter((row) =>
        Object.values(row).some((val) =>
          val.toLowerCase().includes(query)
        )
      )
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📊 Dynamic Data Table</h2>
      <input
        type="text"
        placeholder="🔍 Search..."
        value={searchQuery}
        onChange={handleSearch}
        style={styles.searchInput}
      />
      {filteredData.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              {Object.keys(filteredData[0]).map((key) => (
                <th key={key} onClick={() => handleSort(key)} style={styles.th}>
                  {key} {sortOrder === "asc" ? "⬆" : "⬇"}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((val, i) => (
                  <td key={i} style={styles.td}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

// ✅ Styles for better UI
const styles = {
  container: {
    width: "80%",
    margin: "40px auto",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  searchInput: {
    padding: "8px",
    width: "50%",
    marginBottom: "10px",
    fontSize: "16px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
  th: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px",
    cursor: "pointer",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  },
};

export default DynamicTable;
