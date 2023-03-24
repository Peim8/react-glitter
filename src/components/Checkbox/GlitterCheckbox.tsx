import React from "react";
import classNames from "classnames";
import "./GlitterCheckbox.css";

export interface GlitterCheckboxProps {
  color?: string;
  opacity?: number;
}

const GlitterCheckbox = ({ color, opacity }: GlitterCheckboxProps) => {
  return (
    <input
      type="checkbox"
      className={classNames("glittercheckbox")}
      style={{ backgroundColor: color || "", opacity: opacity || 1 }}
    ></input>
  );
};

export default GlitterCheckbox;
