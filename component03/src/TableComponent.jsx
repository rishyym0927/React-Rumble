import { useState, useEffect } from "react";
import Papa from "papaparse";
import sampleCSV from "../Data.csv"; // Ensure you have a sample CSV file in public or src/data

const TableComponent = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");

  // Load CSV file on component mount
  useEffect(() => {
    Papa.parse(sampleCSV, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        setData(result.data);
        setFilteredData(result.data);
      },
    });
  }, []);

  // Handle Sorting
  const handleSort = (key) => {
    const sortedData = [...filteredData].sort((a, b) => {
      return sortOrder === "asc"
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    });
    setFilteredData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  // Handle Search Filtering
  useEffect(() => {
    const filtered = data.filter((row) =>
      Object.values(row).some((value) =>
        value.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  return (
    <div>
      <input
        type="text"
        placeholder="🔎 Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />
      <table border="1">
        <thead>
          <tr>
            {filteredData.length > 0 &&
              Object.keys(filteredData[0]).map((key) => (
                <th key={key} onClick={() => handleSort(key)} style={{ cursor: "pointer" }}>
                  {key} {sortOrder === "asc" ? "🔼" : "🔽"}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((val, i) => (
                <td key={i}>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
