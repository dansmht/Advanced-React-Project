import type { Preview } from "@storybook/react";
import { StylesDecorator } from "../../src/shared/config/storybook/decorators/StylesDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/decorators/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/decorators/RouterDecorator";
import { Theme } from "../../src/app/providers";

const preview: Preview = {
  decorators: [
    StylesDecorator,
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
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
