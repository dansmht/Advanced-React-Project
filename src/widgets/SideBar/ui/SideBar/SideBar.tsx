import { FC, useState } from "react";
import classNames from "classnames";
import { ThemeSwitcher } from "shared/ui";
import classes from "./SideBar.scss";

interface SideBarProps {
  className?: string;
}

export const SideBar: FC<SideBarProps> = ({ className }) => {

  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  }

  return (
    <div
      className={classNames(classes.SideBar, {
        [classes.collapsed]: collapsed,
      }, className)}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={classes.Switchers}>
        <ThemeSwitcher />
        {/* <LangSwitcher /> */}
      </div>
    </div>
  );
};
