import { useState } from "react";
import Papa from "papaparse";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  background: #2c3e50;
  color: #ecf0f1;
`;

const TableContainer = styled.div`
  margin: 20px auto;
  max-width: 90%;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background: #34495e;
  color: #ecf0f1;
`;

const TableHeader = styled.th`
  padding: 12px;
  background: #e74c3c;
  color: white;
  cursor: pointer;
`;

const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #bdc3c7;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin: 10px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #c0392b;
  }
`;

const Input = styled.input`
  padding: 8px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 250px;
  background: #ecf0f1;
  color: #2c3e50;
`;

const Table = () => {
  const [data, setData] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [search, setSearch] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      complete: (result) => {
        setData(result.data.slice(1));
      },
      skipEmptyLines: true
    });
  };

  const handleSort = () => {
    const sortedData = [...data].sort((a, b) => (sortAsc ? a[0].localeCompare(b[0]) : b[0].localeCompare(a[0])));
    setData(sortedData);
    setSortAsc(!sortAsc);
  };

  const filteredData = data.filter(row => row.some(cell => cell.toLowerCase().includes(search.toLowerCase())));

  return (
    <Container>
      <h2>CSV Data Table</h2>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <Input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button onClick={handleSort}>Sort {sortAsc ? "▲" : "▼"}</Button>
      <TableContainer>
        <StyledTable>
          <thead>
            <tr>
              {data.length > 0 && data[0].map((header, index) => (
                <TableHeader key={index}>{header}</TableHeader>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <TableCell key={cellIndex}>{cell}</TableCell>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </TableContainer>
    </Container>
  );
};

const App = () => <Table />;

export default App;
