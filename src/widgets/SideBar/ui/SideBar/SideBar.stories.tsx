import type { Meta, StoryObj } from "@storybook/react";
import { SideBar } from "widgets";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers";

const meta: Meta<typeof SideBar> = {
  title: "SideBar",
  component: SideBar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const LightTheme: Story = {
  args: {},
};

export const DarkTheme: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
};
