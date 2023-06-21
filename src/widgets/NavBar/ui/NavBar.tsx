import { FC } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { LangSwitcher, ThemeSwitcher } from "widgets";
import classes from "./NavBar.scss";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {

  const { t } = useTranslation();

  return (
    <div className={classNames(classes.NavBar, className)}>
      <div>
        <h1 className={classes.Title}>{t("advancedReactProject")}</h1>
      </div>

      <div className={classes.Switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
