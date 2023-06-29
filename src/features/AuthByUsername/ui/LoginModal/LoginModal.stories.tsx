import type { Meta, StoryObj } from "@storybook/react";
import { LoginModal } from "./LoginModal";

const meta: Meta<typeof LoginModal> = {
  title: "features/LoginModal",
  component: LoginModal,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LoginModal>;

export const Component: Story = {
  args: {},
};
