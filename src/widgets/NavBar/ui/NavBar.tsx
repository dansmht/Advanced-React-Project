import { FC } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { LangSwitcher, ThemeSwitcher } from "widgets";
import { useModal } from "shared/lib/hooks";
import classes from "./NavBar.scss";
import { LoginModal } from "features/AuthByUsername";
import { Button } from "shared/ui";

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {

  const { t } = useTranslation();

  const { isOpen, onClose, onOpen } = useModal();

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

        <div>
          <Button
            onClick={onOpen}
          >
            {t("login")}
          </Button>
        </div>
      </div>

      <LoginModal
        isOpen={isOpen}
        title={t("login2")}
        onClose={onClose}
      />
    </div>
  );
};
