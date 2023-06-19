import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "shared/ui";

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    to: "",
    theme: AppLinkTheme.PRIMARY,
    children: "AppLink"
  },
};

export const Secondary: Story = {
  args: {
    to: "",
    theme: AppLinkTheme.SECONDARY,
    children: "AppLink"
  },
};
