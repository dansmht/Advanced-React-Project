import type { Meta, StoryObj } from "@storybook/react";
import { NotFoundPage } from "pages";

const meta: Meta<typeof NotFoundPage> = {
  title: "pages/NotFoundPage",
  component: NotFoundPage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Component: Story = {
  args: {},
};
