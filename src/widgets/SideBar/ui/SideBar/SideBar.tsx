import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { AppLink, Button } from "shared/ui";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import classes from "./SideBar.scss";

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {

  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.SideBar, {
        [classes.collapsed]: collapsed,
      }, className)}
    >
      <div className={classes.Links}>
        <AppLink to={RoutePath.main} checkIsActive>{t("main")}</AppLink>
        <AppLink to={RoutePath.about} checkIsActive>{t("about")}</AppLink>
      </div>

      <Button
        data-testid="sidebar-toggle"
        className={classNames(classes.ToggleButton)}
        onClick={onToggle}
      />
    </div>
  );
};
