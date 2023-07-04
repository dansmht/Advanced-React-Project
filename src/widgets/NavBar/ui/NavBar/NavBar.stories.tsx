import type { Meta, StoryObj } from "@storybook/react";
import { NavBar } from "widgets";

const meta: Meta<typeof NavBar> = {
  title: "widgets/NavBar",
  component: NavBar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Component: Story = {
  args: {},
};
