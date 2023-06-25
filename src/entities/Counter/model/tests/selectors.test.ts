import { selectCounterValue, selectCounter } from "entities/Counter/model/selectors";
import { counterState } from "./mocks";
import { rootState } from "shared/constants/tests/mocks";

describe("Counter selectors", () => {

  it("should return counter state", () => {
    expect(selectCounter(rootState)).toEqual(counterState);
  });

  it("should return counter value", () => {
    expect(selectCounterValue(rootState)).toEqual(counterState.value);
  });
});
