import { useLayoutEffect } from "react";
import { Decorator } from "@storybook/react";
import { addons } from "@storybook/preview-api";
import { UPDATE_GLOBALS } from "@storybook/core-events";
import { Theme } from "app/providers";
import { ThemeContext } from "app/providers/ThemeProvider/lib/ThemeContext";
import classes from "../../../../app/App.scss";

export const ThemeDecorator: Decorator = (Story, context) => {

  const theme = context?.globals?.theme as Theme || Theme.LIGHT;

  const setTheme = (newTheme: Theme) => {
    context.globals.theme = newTheme;
    addons.getChannel().emit(UPDATE_GLOBALS, {
      globals: {
        theme: newTheme,
      }
    });
  };

  useLayoutEffect(() => {
    document.documentElement.className = theme;
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={{ minHeight: "auto" }} className={classes.App}>
        <Story />
      </div>
    </ThemeContext.Provider>
  );
};
