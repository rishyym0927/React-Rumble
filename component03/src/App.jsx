import React, { useState, useEffect, useMemo } from "react";

const DynamicTable = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    fetch("/data.csv")
      .then((response) => response.text())
      .then((text) => {
        const parsedData = parseCSV(text);
        setData(parsedData);
      })
      .catch(() => {
        // Handle error or ignore if no default CSV is present.
      });
  }, []);

  // Function to parse CSV text
  const parseCSV = (text) => {
    const lines = text.split("\n").filter((line) => line.trim() !== "");
    if (lines.length < 2) return []; // Ensure we have headers and at least one row

    const headers = lines[0].split(",").map((h) => h.trim());
    return lines.slice(1).map((line) => {
      const values = line.split(",").map((v) => v.trim());
      return headers.reduce((obj, header, index) => {
        obj[header] = values[index] || ""; // Ensure empty values don't cause errors
        return obj;
      }, {});
    });
  };

  // Handle file upload and update data state
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const parsedData = parseCSV(text);
      setData(parsedData);
    };
    reader.readAsText(file);
  };

  // Sort and filter data efficiently using useMemo
  const processedData = useMemo(() => {
    if (!data.length) return [];
    
    // Get the first column's key for sorting
    const firstHeader = Object.keys(data[0])[0];

    let sortedData = [...data].sort((a, b) => {
      return sortAscending
        ? a[firstHeader].localeCompare(b[firstHeader])
        : b[firstHeader].localeCompare(a[firstHeader]);
    });

    // Apply search filter
    if (searchTerm) {
      sortedData = sortedData.filter((row) =>
        Object.values(row).some((val) =>
          val.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    return sortedData;
  }, [data, searchTerm, sortAscending]); // Recalculate only when these values change

  // Toggle sorting order
  const sortData = () => {
    setSortAscending((prev) => !prev);
  };

  return (
    <div className="dynamic-table">
      <h2>Dynamic Table</h2>
      <div className="csv-import">
        <label htmlFor="csvInput">📥 Import CSV</label>
        <input type="file" id="csvInput" accept=".csv" onChange={handleFileUpload} />
      </div>

      <div className="controls">
        <input
          type="text"
          placeholder="🔍 Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={sortData}>
          {sortAscending ? "⬆ Sort Ascending" : "⬇ Sort Descending"}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            {data.length > 0 && Object.keys(data[0]).map((header) => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {processedData.map((row, idx) => (
            <tr key={idx}>
              {Object.keys(row).map((header) => <td key={header}>{row[header]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;



