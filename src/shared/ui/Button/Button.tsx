import { ButtonHTMLAttributes, FC } from "react";
import classNames from "classnames";
import classes from './Button.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  theme = ButtonTheme.CLEAR,
  className,
  children,
  ...restProps
}) => {
  return (
    <button
      className={classNames(classes.Button, classes[theme], className)}
      {...restProps}
    >
      {children}
    </button>
  );
};
