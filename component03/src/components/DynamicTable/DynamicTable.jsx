import { useState, useEffect } from 'react';
import './DynamicTable.css';

const DynamicTable = () => {
  const [data, setData] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/data.csv')
      .then(response => response.text())
      .then(csvData => {
        const rows = csvData.split('\n');
        const headers = rows[0].split(',');
        const tableData = rows.slice(1).map(row => {
          const values = row.split(',');
          return headers.reduce((obj, header, index) => {
            obj[header] = values[index];
            return obj;
          }, {});
        });
        setData(tableData);
      });
  }, []);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = () => {
    const sortableData = [...data];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  };

  const filteredData = sortedData().filter(row => 
    Object.values(row).some(val => 
      val.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return '↕️';
    return sortConfig.direction === 'asc' ? '⬆️' : '⬇️';
  };

  if (data.length === 0) return <div>Loading data...</div>;

  return (
    <div className="table-container">
      <div className="table-controls">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {Object.keys(data[0]).map((key) => (
                <th key={key} onClick={() => requestSort(key)}>
                  <div className="header-content">
                    {key}
                    <span className="sort-icon">{getSortIcon(key)}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-footer">
        Showing {filteredData.length} of {data.length} records
      </div>
    </div>
  );
};

export default DynamicTable;