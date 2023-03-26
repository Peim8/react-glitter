import React from "react";
import classNames from "classnames";
import "./Button.css";
import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import img from "../../../stories/assets/stars.png";
export interface ButtonProps {
  type?: "primary" | "secondary";
  textColor?: string;
  color?: string;
  label?: string;
  size?: "small" | "medium" | "large";
  opacity: number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const bg = keyframes`
0% {
    background-position: 0% 33%;
  }
  33% {
    background-position: 50% 33%;
  }

  66% {
    background-position: 66% 66%;
  }
  88% {
    background-position: 44% 88%;
  }
  100% {
    background-position: 66% 100%;
  }
}
`;

const StyledButton = styled.button`
  & {
    color: ${(props: ButtonProps) => props.textColor };
    background: ${(props: ButtonProps) => props.color };
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    font-family: Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-weight: 700;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
  }

  &:before {
    content: "";
    background-size: 200% 500%;
    animation: ${bg} 0.3s infinite;
    animation-direction: normal;
    background-image: url(${img});
    position: absolute;
    opacity: ${(props: ButtonProps) => props.opacity };
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

const Button = ({
  type = "primary",
  textColor,
  color,
  size = "medium",
  onClick,
  label,
  opacity,
}: ButtonProps) => {
  return (
    <StyledButton
      opacity={opacity}
      color={color}
      textColor={textColor}
      className={classNames(
        "storybook-button",
        `storybook-button--${size}`,
        `storybook-button--${type}`
      )}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
