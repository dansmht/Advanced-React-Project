import { FC } from "react";
import classNames from "classnames";
import { AppLink } from "shared/ui";
import classes from './NavBar.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  return (
    <div className={classNames(classes.NavBar, className)}>
      <div className={classes.Links}>
        <AppLink to="/">Главная</AppLink>
        <AppLink to="/about">О сайте</AppLink>
      </div>
    </div>
  );
};
