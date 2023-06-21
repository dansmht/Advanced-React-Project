import { FC } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import classNames from "classnames";
import classes from "./AppLink.scss";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends NavLinkProps {
  theme?: AppLinkTheme;
  checkIsActive?: boolean;
  className?: string;
}

export const AppLink: FC<AppLinkProps> = ({
  to,
  theme = AppLinkTheme.PRIMARY,
  checkIsActive,
  className,
  children,
  ...restProps
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(classes.AppLink, classes[theme], {[classes.Active]: checkIsActive && isActive}, className)}
      {...restProps}
    >
      {children}
    </NavLink>
  );
};
