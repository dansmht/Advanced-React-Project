import { FC, LabelHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import classes from "./Label.scss";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string;
  children?: ReactNode;
}

export const Label: FC<LabelProps> = ({
  className,
  children,
  ...restProps
}) => {
  return (
    <label
      data-testid="label"
      className={classNames(classes.Label, className)}
      {...restProps}
    >
      {children}
    </label>
  );
};
