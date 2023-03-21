import React from "react";
import classNames from "classnames";
import "./GlitterTable.css";

export interface TableProps {
  color?: string;
}

const GlitterTable = ({ color }: TableProps) => {
  return (
    <table
      className={classNames("storybook-table")}
      style={color ? { border: "1px solid black" } : {}}
    >
      <th style={color ? { border: "1px solid black" } : {}}>Test</th>
      <tr style={color ? { border: "1px solid black" } : {}}>
        <td style={color ? { border: "1px solid black", backgroundColor: color } : {}}>Test2</td>
      </tr>
    </table>
  );
};

export default GlitterTable;
