import { FC, InputHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import classes from "./Input.scss";

export type InputVariant = "unstyled" | "flushed" | "filled" | "outline";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariant;
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
  autoComplete?: "on" | "off";
  wrapperClassName?: string;
  className?: string;
}

export const Input: FC<InputProps> = ({
  variant = "outline",
  type = "text",
  autoComplete = "off",
  leftAdornment,
  rightAdornment,
  wrapperClassName,
  className,
  ...restProps
}) => {
  return (
    <div
      data-testid="input-wrapper"
      className={classNames(classes.InputWrapper, classes[variant], wrapperClassName)}
    >
      {leftAdornment && (
        <div className={classes.LeftAdornment}>
          {leftAdornment}
        </div>
      )}
      <input
        data-testid="input"
        type={type}
        autoComplete={autoComplete}
        className={classNames(classes.Input, className)}
        {...restProps}
      />
      {rightAdornment && (
        <div className={classes.RightAdornment}>
          {rightAdornment}
        </div>
      )}
    </div>
  );
};
