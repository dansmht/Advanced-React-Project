import { useContext, useLayoutEffect } from "react";
import { Theme, ThemeContext } from "./ThemeContext";
import { LocalStorageKeys } from "shared/constants/localStorageKeys";

interface UseThemeResult {
  theme: Theme,
  toggleTheme: VoidFunction;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme(newTheme);
    localStorage.setItem(LocalStorageKeys.THEME, newTheme);
  };

  useLayoutEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};
