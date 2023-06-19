import type { Meta, StoryObj } from "@storybook/react";
import MainPage from "./MainPage";

const meta: Meta<typeof MainPage> = {
  title: "pages/MainPage",
  component: MainPage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Component: Story = {
  args: {},
};
