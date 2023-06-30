import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "shared/ui";

const meta: Meta<typeof Input> = {
  title: "shared/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Unstyled: Story = {
  args: {
    variant: "unstyled",
  },
};

export const Flushed: Story = {
  args: {
    variant: "flushed",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const UnstyledWithPlaceholder: Story = {
  args: {
    ...Unstyled.args,
    placeholder: "Placeholder Unstyled",
  },
};

export const FlushedWithPlaceholder: Story = {
  args: {
    ...Flushed.args,
    placeholder: "Placeholder Flushed",
  },
};

export const FilledWithPlaceholder: Story = {
  args: {
    ...Filled.args,
    placeholder: "Placeholder Filled",
  },
};

export const OutlineWithPlaceholder: Story = {
  args: {
    ...Outline.args,
    placeholder: "Placeholder Outline",
  },
};
