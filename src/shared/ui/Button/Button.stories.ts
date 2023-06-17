import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "shared/ui";
import { ButtonTheme } from "shared/ui/Button/Button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Clear: Story = {
  args: {
    label: "Button",
    theme: ButtonTheme.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    label: "Button",
    theme: ButtonTheme.OUTLINE,
  },
};
