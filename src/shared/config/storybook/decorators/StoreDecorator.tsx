import { Decorator } from "@storybook/react";
import { StoreProvider } from "app/providers";
import { counterState } from "shared/constants/tests/mocks/counterState";

const initialState = {
  counter: counterState,
};

export const StoreDecorator: Decorator = (Story) => (
  <StoreProvider initialState={initialState}>
    <Story />
  </StoreProvider>
);
