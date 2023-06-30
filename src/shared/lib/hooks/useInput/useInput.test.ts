import { ChangeEvent } from "react";
import { act, renderHook } from "@testing-library/react";
import { useInput } from "./useInput";

describe("useInput", () => {

  it("should render initial value", () => {
    const { result } = renderHook(useInput);
    expect(result.current[0]).toEqual("");
  });

  it("should render initial value the same as prop", () => {
    const { result } = renderHook(useInput, { initialProps: "Value" });
    expect(result.current[0]).toEqual("Value");
  });

  it("should change", () => {
    const { result } = renderHook(useInput);
    const e = { target: { value: "Value 2" }} as ChangeEvent<HTMLInputElement>;
    act(() => result.current[1](e));
    expect(result.current[0]).toEqual("Value 2");
  });
});
