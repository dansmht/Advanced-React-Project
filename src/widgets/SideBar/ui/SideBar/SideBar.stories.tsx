import type { Meta, StoryObj } from "@storybook/react";
import { SideBar } from "widgets";
import { PositionRelativeDecorator } from "shared/config/storybook/decorators/PositionRelativeDecorator";

const meta: Meta<typeof SideBar> = {
  title: "widgets/SideBar",
  component: SideBar,
  tags: ["autodocs"],
  argTypes: {},
  decorators: [PositionRelativeDecorator],
};

export default meta;
type Story = StoryObj<typeof SideBar>;

export const Component: Story = {
  args: {},
};
