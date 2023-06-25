import { RootState } from "app/providers";
import { counterState } from "entities/Counter/model/tests/mocks";

export const rootState: RootState = {
  counter: counterState,
};
