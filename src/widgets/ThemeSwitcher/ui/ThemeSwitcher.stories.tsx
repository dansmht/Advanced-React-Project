import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "widgets";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "widgets/ThemeSwitcher",
  component: ThemeSwitcher,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Component: Story = {
  args: {},
};
