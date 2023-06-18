import { Decorator } from "@storybook/react";
import { Theme } from "app/providers";
import classes from "../../../../app/styles/index.scss";

// eslint-disable-next-line
export const ThemeDecorator = (theme: Theme): Decorator => (Story) => {
  return <div style={{minHeight: "auto"}} className={`${classes.App} ${classes[theme]}`}>
    <Story />
  </div>;
};
