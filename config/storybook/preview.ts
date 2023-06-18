import type { Preview } from "@storybook/react";
import { StylesDecorator } from "../../src/shared/config/storybook/StylesDecorator/StylesDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "../../src/app/providers";

const preview: Preview = {
  decorators: [
    StylesDecorator,
    ThemeDecorator(Theme.LIGHT)
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
