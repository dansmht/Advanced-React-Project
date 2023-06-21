import { FC } from "react";
import classNames from "classnames";
import { Theme, useTheme } from "app/providers";
import { Button } from "shared/ui";
import SvgIcons from "shared/assets/icons";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {

  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(className)}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT && <SvgIcons.LightTheme />}
      {theme === Theme.DARK && <SvgIcons.DarkTheme />}
    </Button>
  );
};
