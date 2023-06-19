import type { Preview } from "@storybook/react";
import { StylesDecorator } from "../../src/shared/config/storybook/decorators/StylesDecorator";
import { ThemeDecorator } from "../../src/shared/config/storybook/decorators/ThemeDecorator";
import { RouterDecorator } from "../../src/shared/config/storybook/decorators/RouterDecorator";
import i18n from "../../src/shared/config/i18n/i18nForStorybook";

const preview: Preview = {
  decorators: [
    StylesDecorator,
    ThemeDecorator,
    RouterDecorator,
  ],
  parameters: {
    i18n,
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globals: {
    locale: "en",
    locales: {
      en: "English",
      ru: "Русский"
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "chromatic",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
