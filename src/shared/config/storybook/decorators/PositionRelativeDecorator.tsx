import { Decorator } from "@storybook/react";

export const positionRelativeClassName = "position-relative";

export const PositionRelativeDecorator: Decorator = (Story) => (
  <>
    <style>
      {`.${positionRelativeClassName} { position: relative; }`}
    </style>
    <Story args={{ className: positionRelativeClassName }} />
  </>
);
