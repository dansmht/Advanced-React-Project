import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "shared/ui";
import SvgIcons from "shared/assets/icons";

const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    to: "",
    theme: AppLinkTheme.PRIMARY,
    children: "AppLink",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    theme: AppLinkTheme.SECONDARY,
  },
};

export const CheckIsActiveRoute: Story = {
  args: {
    ...Primary.args,
    checkIsActive: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    ...Primary.args,
    leftIcon: <SvgIcons.LightTheme />,
  },
};

export const WithRightIcon: Story = {
  args: {
    ...Primary.args,
    rightIcon: <SvgIcons.DarkTheme />,
  },
};

export const WithLeftAndRightIcons: Story = {
  args: {
    ...Primary.args,
    leftIcon: <SvgIcons.LightTheme />,
    rightIcon: <SvgIcons.DarkTheme />,
  },
};
