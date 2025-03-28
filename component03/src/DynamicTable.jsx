import React, { useState } from 'react';
import './DynamicTable.css'; 

// DynamicTable Component
const DynamicTable = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const text = e.target.result;
        const rows = text.split('\n').map((row) => row.split(','));
        setData(rows);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="table-container">
      <div className="table-actions">
        <div className="file-upload">
          <label className="label">Choose File:</label>
          <input type="file" accept=".csv" onChange={handleFileUpload} />
        </div>
        <input
          type="text"
          placeholder="Search table..."
          className="search-input"
          onChange={(e) => {
            const searchValue = e.target.value.toLowerCase();
            setData((prevData) =>
              prevData.filter((row) => row.join(' ').toLowerCase().includes(searchValue))
            );
          }}
        />
      </div>

      <div className="table-responsive">
        <table className="dynamic-table">
          <thead>
            <tr>
              {data.length > 0 &&
                data[0].map((heading, index) => (
                  <th key={index}>{heading}</th>
                ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(1).map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                {row.map((cell, index) => (
                  <td key={index}>{cell}</td>
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
