import { selectCounterValue, selectCounter } from "entities/Counter/model/selectors";
import { counterState } from "shared/constants/tests/mocks/counterState";
import { RootState } from "app/providers";

describe("Counter selectors", () => {

  const rootState = { counter: counterState } as RootState;

  it("should return counter state", () => {
    expect(selectCounter(rootState)).toEqual(counterState);
  });

  it("should return counter value", () => {
    expect(selectCounterValue(rootState)).toEqual(counterState.value);
  });
});
