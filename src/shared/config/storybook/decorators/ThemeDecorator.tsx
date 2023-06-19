import { Decorator } from "@storybook/react";
import classes from "../../../../app/styles/index.scss";

export const ThemeDecorator: Decorator = (Story, context) => {
  return <div style={{minHeight: "auto"}} className={`${classes.App} ${classes[context.globals.theme]}`}>
    <Story />
  </div>;
};
