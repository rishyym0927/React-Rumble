import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  width: 60%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Table = styled.table`
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 10px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
`;

const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  background-color: #333;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`;

const DataTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");

  // Load CSV data on component mount
  useEffect(() => {
    Papa.parse("/data/data.csv", {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        setData(result.data);
        setFilteredData(result.data);
      },
    });
  }, []);

  // Handle search and filter rows
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(query)
      )
    );

    setFilteredData(filtered);
  };

  // Sort table by column
  const handleSort = (column) => {
    const sortedData = [...filteredData].sort((a, b) => {
      if (sortOrder === "asc") {
        return a[column] > b[column] ? 1 : -1;
      } else {
        return a[column] < b[column] ? 1 : -1;
      }
    });

    setFilteredData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <Container>
      <h2>📊 Dynamic Table with CSV Data</h2>

      {/* Search Input */}
      <Input
        type="text"
        placeholder="🔍 Search by any field..."
        value={searchQuery}
        onChange={handleSearch}
      />

      {/* Table */}
      {filteredData.length > 0 ? (
        <Table>
          <thead>
            <tr>
              {Object.keys(filteredData[0]).map((key) => (
                <Th key={key} onClick={() => handleSort(key)}>
                  {key} {sortOrder === "asc" ? "⬆️" : "⬇️"}
                </Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <Td key={i}>{value}</Td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>⚠️ No data found!</p>
      )}
    </Container>
  );
};

export default DataTable;
