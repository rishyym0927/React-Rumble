import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.3s ease;
  }
`;

const lightTheme = {
  body: '#f3f8fc',
  text: '#1a1a2e',
};

const darkTheme = {
  body: '#1a1a2e',
  text: '#f3f8fc',
};

const TableContainer = styled.div`
  padding: 20px;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(145deg, #1e90ff, #ff6b6b);
`;

const SearchInput = styled.input`
  padding: 15px;
  width: 40%;
  margin-bottom: 20px;
  border: none;
  border-radius: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  outline: none;
`;

const StyledTable = styled.table`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  border-collapse: collapse;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
`;

const StyledTh = styled.th`
  padding: 20px;
  background-color: #1e90ff;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.4rem;
`;

const StyledTd = styled.td`
  padding: 20px;
  border: 1px solid #ddd;
  font-size: 1.2rem;
  color: #1a1a2e;
`;

const NoData = styled.div`
  font-size: 1.5rem;
  color: #888;
  margin-top: 20px;
`;

function DynamicTable() {
  const [data, setData] = useState([
    { name: 'John Doe', age: '29', country: 'USA' },
    { name: 'Jane Smith', age: '34', country: 'UK' },
    { name: 'Alex Johnson', age: '22', country: 'India' },
    { name: 'Maria Garcia', age: '27', country: 'Spain' },
  ]);
  const [search, setSearch] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  const handleSort = () => {
    if (data.length === 0) return;
    const sortedData = [...data].sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setData(sortedData);
    setSortAsc(!sortAsc);
  };

  const filteredData = data.filter(item =>
    item.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <TableContainer>
      <h1 style={{ color: '#ffffff', marginBottom: '20px' }}>Web-Wing Data Table</h1>
      <SearchInput
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <StyledTable>
        <thead>
          <tr>
            <StyledTh onClick={handleSort}>Name {sortAsc ? '🔼' : '🔽'}</StyledTh>
            <StyledTh>Age</StyledTh>
            <StyledTh>Country</StyledTh>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((row, index) => (
              <tr key={index}>
                <StyledTd>{row.name || 'N/A'}</StyledTd>
                <StyledTd>{row.age || 'N/A'}</StyledTd>
                <StyledTd>{row.country || 'N/A'}</StyledTd>
              </tr>
            ))
          ) : (
            <tr>
              <StyledTd colSpan="3">
                <NoData>No data found</NoData>
              </StyledTd>
            </tr>
          )}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<DynamicTable />} />
        </Routes>
      </Router>
      <motion.button
        style={{ position: 'absolute', top: '10px', right: '10px', padding: '10px 20px', borderRadius: '25px', cursor: 'pointer', border: 'none' }}
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
      >
        {theme === 'light' ? '🌞' : '🌙'}
      </motion.button>
    </ThemeProvider>
  );
}

export default ThemeToggle;