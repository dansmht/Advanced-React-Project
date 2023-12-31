import { createContext } from "react";
import { SetState } from "shared/types/ReactTypes";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: SetState<Theme>;
}

export const ThemeContext = createContext<ThemeContextProps>({});
