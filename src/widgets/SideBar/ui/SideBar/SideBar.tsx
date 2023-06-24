import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import SvgIcons from "shared/assets/icons";
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
        <AppLink
          to={RoutePath.main}
          leftIcon={<SvgIcons.Home />}
          className={classes.Link}
          checkIsActive
        >
          <span className={classes.LinkText}>
            {t("main")}
          </span>
        </AppLink>

        <AppLink
          to={RoutePath.about}
          leftIcon={<SvgIcons.Notes />}
          className={classes.Link}
          checkIsActive
        >
          <span className={classes.LinkText}>
            {t("about")}
          </span>
        </AppLink>
      </div>

      <Button
        data-testid="sidebar-toggle"
        className={classNames(classes.ToggleButton)}
        onClick={onToggle}
      />
    </div>
  );
};
