import { FC, useState } from "react";
import classNames from "classnames";
import { LangSwitcher, ThemeSwitcher } from "widgets";
import { Button } from "shared/ui";
import classes from "./SideBar.scss";

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {

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
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
      >
        {/* toggle */}
      </Button>
      <div className={classes.Switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
