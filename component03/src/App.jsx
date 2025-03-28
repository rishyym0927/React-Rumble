import React, { useState } from "react";
import Papa from "papaparse";
import "./DynamicTable.css";

const DynamicTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      Papa.parse(file, {
        complete: (result) => {
          setData(
            result.data.slice(1).map((row) => {
              return Object.fromEntries(
                Object.entries(row).map(([key, value]) => [key, isNaN(value) || value === "" ? value : Number(value)])
              );
            })
          );
        },
        header: true,
      });
    }
  };

  const handleSort = (column) => {
    const order = sortColumn === column && sortOrder === "asc" ? "desc" : "asc";
    const sortedData = [...data].sort((a, b) => {
      const aValue = a[column] ?? "";
      const bValue = b[column] ?? "";
      
      if (!isNaN(aValue) && !isNaN(bValue)) {
        return order === "asc" ? aValue - bValue : bValue - aValue;
      } else {
        return order === "asc" ? aValue.toString().localeCompare(bValue.toString()) : bValue.toString().localeCompare(aValue.toString());
      }
    });
    setSortColumn(column);
    setSortOrder(order);
    setData(sortedData);
  };

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value?.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="table-container">
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {data.length > 0 &&
                Object.keys(data[0]).map((key) => (
                  <th key={key} onClick={() => handleSort(key)}>
                    {key.toUpperCase()} {sortColumn === key ? (sortOrder === "asc" ? "▲" : "▼") : ""}
                  </th>
                ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                {Object.keys(data[0]).map((key, i) => (
                  <td key={i}>{row[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicTable;
