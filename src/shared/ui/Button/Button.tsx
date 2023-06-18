import { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames";
import classes from "./Button.scss";

export enum ButtonTheme {
  PRIMARY = "clear",
  CLEAR = "clear",
  OUTLINE = "outline",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  theme = ButtonTheme.CLEAR,
  type = "button",
  className,
  children,
  ...restProps
}) => {
  return (
    <button
      type={type}
      className={classNames(classes.Button, classes[theme], className)}
      {...restProps}
    >
      {children}
    </button>
  );
};
