import React, { useState } from "react";
import Papa from "papaparse";

const App = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          setData(result.data.filter(row => row.length > 1)); // Remove empty rows
        },
        header: false,
        skipEmptyLines: true,
      });
    }
  };

  const handleSort = (index) => {
    let direction = "asc";
    if (sortConfig.key === index && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      const valA = a[index]?.toLowerCase() || "";
      const valB = b[index]?.toLowerCase() || "";
      return direction === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
    });

    setData(sortedData);
    setSortConfig({ key: index, direction });
  };

  const filteredData = data.filter((row) =>
    row.some((cell) => cell.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div style={styles.container}>
      <div style={styles.centerBox}>
        <h2 style={styles.title}>🚀 Stunning Dynamic Table</h2>

        <label style={styles.uploadLabel}>
          📂 Upload CSV
          <input type="file" accept=".csv" onChange={handleFileUpload} style={styles.upload} />
        </label>

        <input
          type="text"
          placeholder="🔍 Search here..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={styles.search}
        />

        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                {data.length > 0 &&
                  data[0].map((_, index) => (
                    <th key={index} onClick={() => handleSort(index)} style={styles.th}>
                      Column {index + 1}{" "}
                      {sortConfig.key === index ? (sortConfig.direction === "asc" ? "⬆" : "⬇") : "↕"}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, rowIndex) => (
                <tr key={rowIndex} style={styles.tr}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} style={styles.td}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// **🔥 Unique Neon & Glassmorphism Design**
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
  },
  centerBox: {
    textAlign: "center",
    width: "85%",
    maxWidth: "900px",
    background: "rgba(255, 255, 255, 0.1)",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "0px 0px 30px rgba(0, 255, 255, 0.3)",
    backdropFilter: "blur(12px)",
    border: "2px solid rgba(255, 255, 255, 0.2)",
    color: "#fff",
  },
  title: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#0ef",
    textShadow: "0px 0px 10px rgba(0, 238, 255, 0.8)",
  },
  uploadLabel: {
    display: "inline-block",
    padding: "12px 20px",
    background: "linear-gradient(45deg, #ff416c, #ff4b2b)",
    color: "#fff",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    boxShadow: "0px 4px 10px rgba(255, 75, 75, 0.6)",
    transition: "0.3s",
  },
  upload: {
    display: "none",
  },
  search: {
    padding: "12px",
    width: "100%",
    maxWidth: "300px",
    border: "none",
    borderRadius: "25px",
    outline: "none",
    textAlign: "center",
    boxShadow: "0px 0px 10px rgba(0, 238, 255, 0.8)",
    transition: "0.3s",
    marginTop: "15px",
  },
  tableWrapper: {
    maxWidth: "100%",
    overflowX: "auto",
    borderRadius: "10px",
    boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.2)",
    padding: "10px",
    marginTop: "20px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    background: "rgba(0, 0, 0, 0.4)",
    borderRadius: "10px",
  },
  th: {
    padding: "12px",
    cursor: "pointer",
    background: "linear-gradient(45deg, #ff9a9e, #fad0c4)",
    color: "#000",
    fontSize: "16px",
    borderBottom: "2px solid rgba(255, 255, 255, 0.5)",
    transition: "0.3s",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    fontSize: "14px",
    textAlign: "center",
    color: "#fff",
  },
  tr: {
    transition: "0.3s",
  },
};

// Exporting App Component
export default App;
