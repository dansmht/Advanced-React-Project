import { Decorator } from "@storybook/react";
import { BrowserRouter as Router } from "react-router-dom";

export const RouterDecorator: Decorator = (Story) => (
  <Router>
    <Story />
  </Router>
);
