import { FC } from "react";
import classNames from "classnames";
import { Button } from "shared/ui";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import classes from "./ThemeSwitcher.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {

  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(classes.ThemeSwitcher, className)}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT && <LightIcon />}
      {theme === Theme.DARK && <DarkIcon />}
    </Button>
  );
};
