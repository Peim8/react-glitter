
import React from "react";
import classNames from "classnames";
import "./button.css";

export interface ButtonProps {
    type?: "primary" | "secondary";
    textColor?: string;
    size?: "small" | "medium" | "large";
    label: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
    type = "primary",
    textColor,
    size = "medium",
    onClick,
    label,
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={classNames(
                "storybook-button",
                `storybook-button--${size}`,
                `storybook-button--${type}`
            )}
            style={textColor ? { color: textColor } : {}}
            onClick={onClick}
        >
            {label}
        </button>
    );
};

export default Button;