import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "shared/ui";

const meta: Meta<typeof Loader> = {
  title: "shared/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Component: Story = {
  args: {},
};
