import React from "react";
import classNames from "classnames";
import "./Div.css";

export interface DivProps {
  color?: string;
  opacity?: number;
}

const Div = ({ color, opacity }: DivProps) => {
  return (
    <div
      className={classNames("storybook-div")}
      style={{ backgroundColor: color || "", opacity: opacity || 1}}
    >
      {"label"}
    </div>
  );
};

export default Div;
