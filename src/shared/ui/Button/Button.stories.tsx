import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonTheme } from "shared/ui";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.CLEAR,
  },
};

export const FILLED: Story = {
  args: {
    ...Clear.args,
    theme: ButtonTheme.FILLED,
  },
};
