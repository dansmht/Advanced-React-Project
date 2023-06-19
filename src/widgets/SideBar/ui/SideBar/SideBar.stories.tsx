import type { Meta, StoryObj } from "@storybook/react";
import { SideBar } from "widgets";

const meta: Meta<typeof SideBar> = {
  title: "widgets/SideBar",
  component: SideBar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Component: Story = {
  args: {},
};
