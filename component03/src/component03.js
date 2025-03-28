import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import Data from './Data.csv';

const Component03 = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch(Data)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setTableData(result.data);
          },
        });
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {tableData.length > 0 &&
              Object.keys(tableData[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Component03;
