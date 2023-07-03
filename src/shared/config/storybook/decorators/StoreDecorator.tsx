import { Decorator } from "@storybook/react";
import { RootState, StoreProvider } from "app/providers";
import { counterState } from "shared/constants/tests/mocks/counterState";
import { userState } from "shared/constants/tests/mocks/userState";
import { loginState } from "shared/constants/tests/mocks/loginState";

const initialState: RootState = {
  counter: counterState,
  user: userState,
  login: loginState
};

export const StoreDecorator: Decorator = (Story) => (
  <StoreProvider initialState={initialState}>
    <Story />
  </StoreProvider>
);
