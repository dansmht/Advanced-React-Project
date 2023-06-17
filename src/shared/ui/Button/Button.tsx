import { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames";
import classes from "./Button.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  theme?: ButtonTheme;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  label,
  theme = ButtonTheme.CLEAR,
  type = "button",
  className,
  ...restProps
}) => {
  return (
    <button
      type={type}
      className={classNames(classes.Button, classes[theme], className)}
      {...restProps}
    >
      {label}
    </button>
  );
};
