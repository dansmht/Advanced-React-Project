import { Decorator } from "@storybook/react";
import { StoreProvider } from "app/providers";
import { counterState } from "shared/constants/tests/mocks/counterState";
import { userState } from "shared/constants/tests/mocks/userState";

const initialState = {
  counter: counterState,
  user: userState,
};

export const StoreDecorator: Decorator = (Story) => (
  <StoreProvider initialState={initialState}>
    <Story />
  </StoreProvider>
);
