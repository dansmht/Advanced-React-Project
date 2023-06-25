import { Decorator } from "@storybook/react";
import { StoreProvider } from "app/providers";
import { rootState } from "shared/constants/tests/mocks";

export const StoreDecorator: Decorator = (Story) => (
  <StoreProvider initialState={rootState}>
    <Story />
  </StoreProvider>
);
