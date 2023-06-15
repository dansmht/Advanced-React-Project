import { FC } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { AppLink } from "shared/ui";
import classes from './NavBar.scss';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {

  const {t} = useTranslation();

  return (
    <div className={classNames(classes.NavBar, className)}>
      <div className={classes.Links}>
        <AppLink to="/">{t('main')}</AppLink>
        <AppLink to="/about">{t('about')}</AppLink>
      </div>
    </div>
  );
};
