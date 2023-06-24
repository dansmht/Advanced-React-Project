import { counterActions, counterReducer } from "../slice";
import { counterState } from "./mocks";

describe("Counter slice", () => {

  it("should work with empty state", () => {
    expect(counterReducer(undefined, counterActions.increment()).value)
      .toEqual(1);
  });

  it("should increment counter value by 1", () => {
    expect(counterReducer(counterState, counterActions.increment()).value)
      .toEqual(counterState.value + 1);
  });

  it("should decrement counter value by 1", () => {
    expect(counterReducer(counterState, counterActions.decrement()).value)
      .toEqual(counterState.value - 1);
  });

  it("should increment counter value by 5", () => {
    expect(counterReducer(counterState, counterActions.incrementByAmount(5)).value)
      .toEqual(counterState.value + 5);
  });
});
