import { act, renderHook } from "@testing-library/react";
import { useModal } from "./useModal";

describe("useModal", () => {

  it("should render initial isOpen", () => {
    const { result } = renderHook(useModal);
    expect(result.current.isOpen).toEqual(false);
  });

  it("should render initial isOpen the same as prop", () => {
    const { result } = renderHook(useModal, { initialProps: true });
    expect(result.current.isOpen).toEqual(true);
  });

  it("should open", () => {
    const { result } = renderHook(useModal);
    act(result.current.onOpen);
    expect(result.current.isOpen).toEqual(true);
    act(result.current.onOpen);
    expect(result.current.isOpen).toEqual(true);
  });

  it("should close", () => {
    const { result } = renderHook(useModal, { initialProps: true });
    act(result.current.onClose);
    expect(result.current.isOpen).toEqual(false);
    act(result.current.onClose);
    expect(result.current.isOpen).toEqual(false);
  });

  it("should toggle", () => {
    const { result } = renderHook(useModal);
    act(result.current.onToggle);
    expect(result.current.isOpen).toEqual(true);
    act(result.current.onToggle);
    expect(result.current.isOpen).toEqual(false);
  });
});
