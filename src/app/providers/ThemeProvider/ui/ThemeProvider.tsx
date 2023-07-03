import { FC, ReactNode, useMemo, useState } from "react";
import { Theme, ThemeContext } from "../lib/ThemeContext";
import { LocalStorageKeys } from "shared/constants/localStorageKeys";

interface ThemeProviderProps {
  children?: ReactNode;
}

export const defaultTheme = localStorage.getItem(LocalStorageKeys.THEME) as Theme || Theme.LIGHT;

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
