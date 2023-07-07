import { ComponentProps, FC } from "react";
import classNames from "classnames";
import classes from "./Button.scss";

export enum ButtonTheme {
  CLEAR = "clear",
  FILLED = "filled",
}

interface ButtonProps extends ComponentProps<"button"> {
  theme?: ButtonTheme;
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
      data-testid="button"
      type={type}
      className={classNames(classes.Button, classes[theme], className)}
      {...restProps}
    >
      {children}
    </button>
  );
};
