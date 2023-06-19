import type { Meta, StoryObj } from "@storybook/react";
import { PageError } from "widgets";

const meta: Meta<typeof PageError> = {
  title: "widgets/PageError",
  component: PageError,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PageError>;

export const Component: Story = {
  args: {},
};
