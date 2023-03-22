import React, { Children, ReactNode } from "react";
import classNames from "classnames";
import "./GlitterTable.css";

export interface TableProps {
  color?: string;
  children?: ReactNode;
}

const GlitterTable = (props: TableProps) => {
  return (
    <table
      className={classNames("storybook-glittertable")}
      style={{ backgroundColor: props.color || "" }}
    >
      {props.children}
    </table>
  );
};

export default GlitterTable;
