import { FC } from "react";
import classNames from "classnames";
import { Theme, useTheme } from "app/providers";
import { Button } from "shared/ui";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

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
      {
        theme === Theme.DARK
          ? <DarkIcon />
          : <LightIcon />
      }
    </Button>
  );
};
