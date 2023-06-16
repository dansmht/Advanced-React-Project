import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import classNames from "classnames";
import classes from "./AppLink.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  theme = AppLinkTheme.PRIMARY,
  className,
  children,
  ...restProps
}) => {
  return (
    <Link
      to={to}
      className={classNames(classes.AppLink, classes[theme], className)}
      {...restProps}
    >
      {children}
    </Link>
  );
};
