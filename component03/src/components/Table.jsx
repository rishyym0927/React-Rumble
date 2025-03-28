import { useState } from "react";
import Papa from "papaparse";

export default function DynamicTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      complete: (result) => {
        setData(result.data);
      },
      header: true,
      skipEmptyLines: true,
    });
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const handleSort = (column) => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });
    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value?.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <label style={{ display: "block", marginBottom: "10px", fontSize: "18px", fontWeight: "bold" }}>
        Upload CSV:
      </label>
      <input 
        type="file" 
        accept=".csv" 
        onChange={handleFileUpload} 
        style={{ padding: "10px", marginBottom: "15px", border: "1px solid #ccc", borderRadius: "5px" }} 
      />
      <br />
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearch}
        style={{ padding: "10px", width: "250px", marginBottom: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
      />
      <table border="1" style={{ width: "100%", marginTop: "10px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => (
                <th key={key} onClick={() => handleSort(key)} style={{ cursor: "pointer", padding: "10px", background: "#ddd" }}>
                  {key} {sortOrder === "asc" ? "⬆️" : "⬇️"}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i} style={{ padding: "10px", border: "1px solid #ccc" }}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}