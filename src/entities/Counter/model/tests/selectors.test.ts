import { RootState } from "app/providers";
import { selectCounterValue, selectCounter } from "entities/Counter/model/selectors";
import { counterState, rootState } from "./mocks";

describe("Counter selectors", () => {

  it("should return counter state", () => {
    expect(selectCounter(rootState as RootState)).toEqual(counterState);
  });

  it("should return counter value", () => {
    expect(selectCounterValue(rootState as RootState)).toEqual(counterState.value);
  });
});
