import { ComponentProps, FC, ReactNode } from "react";
import classNames from "classnames";
import classes from "./Label.scss";

interface LabelProps extends ComponentProps<"label"> {
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
