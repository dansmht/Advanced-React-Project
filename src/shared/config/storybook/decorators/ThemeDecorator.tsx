import { useMemo } from "react";
import { Decorator } from "@storybook/react";
import { addons } from "@storybook/preview-api";
import { UPDATE_GLOBALS } from "@storybook/core-events";
import { Theme } from "app/providers";
import { ThemeContext } from "app/providers/ThemeProvider/lib/ThemeContext";
import classes from "../../../../app/styles/index.scss";

export const ThemeDecorator: Decorator = (Story, context) => {

  const theme = context?.globals?.theme as Theme || Theme.LIGHT;

  const providerProps = useMemo(() => ({
    theme,
    setTheme: (newTheme: Theme) => {
      context.globals.theme = newTheme;
      addons.getChannel().emit(UPDATE_GLOBALS, {
        globals: {
          theme: newTheme,
        }
      });
    }
  }), [theme]);

  return (
    <ThemeContext.Provider value={providerProps}>
      <div style={{minHeight: "auto"}} className={`${classes.App} ${classes[theme]}`}>
        <Story />
      </div>
    </ThemeContext.Provider>
  );
};
