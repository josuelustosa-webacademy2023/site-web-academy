import React from "react";
import Table from "react-bootstrap/Table";

import "./style.css";

function CustomTable({ columns, rows }) {
  return (
    <Table responsive className="table-bordered">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => (
              <td key={index}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default CustomTable;
