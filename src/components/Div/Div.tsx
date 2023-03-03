
import React from "react";
import classNames from "classnames";
import "./Div.css";

export interface DivProps {
    color?: string;
}

const Div = ({
    color
}: DivProps) => {
    return (
        <div
            className={classNames(
                "storybook-div"
            )}
            style={color ? { backgroundColor: color } : {}}
        >
            {"label"}
        </div>
    );
};

export default Div;