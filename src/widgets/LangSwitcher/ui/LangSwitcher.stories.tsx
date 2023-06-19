import type { Meta, StoryObj } from "@storybook/react";
import { LangSwitcher } from "widgets";

const meta: Meta<typeof LangSwitcher> = {
  title: "widgets/LangSwitcher",
  component: LangSwitcher,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

export const Component: Story = {
  args: {},
};
