import type { Meta, StoryObj } from "@storybook/react";
import { PageLoader } from "widgets";

const meta: Meta<typeof PageLoader> = {
  title: "widgets/PageLoader",
  component: PageLoader,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PageLoader>;

export const Component: Story = {
  args: {},
};
