import { FC } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { LangSwitcher, ThemeSwitcher } from "widgets";
import { AuthButtons } from "../AuthButtons/AuthButtons";
import classes from "./NavBar.scss";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {

  const { t } = useTranslation();

  return (
    <div
      data-testid="navbar"
      className={classNames(classes.NavBar, className)}
    >
      <div className={classes.NavBarContent}>
        <div>
          <h1 className={classes.Title}>{t("advancedReactProject")}</h1>
        </div>

        <div className={classes.Switchers}>
          <ThemeSwitcher />
          <LangSwitcher />
        </div>

        <AuthButtons />
      </div>
    </div>
  );
};
