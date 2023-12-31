import { fireEvent, screen } from "@testing-library/react";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";
import { Counter } from "entities/Counter";
import { counterState } from "shared/constants/tests/mocks/counterState";

describe("Counter", () => {

  const initialState = {
    counter: counterState,
  };

  beforeEach(() => {
    renderComponent(<Counter />, { initialState });
  });

  it("should render", () => {
    expect(screen.getByTestId("counter")).toBeInTheDocument();
    expect(screen.getByTestId("counter-value")).toHaveTextContent(`${counterState.value}`);
  });

  it("should increment counter value by 1", () => {
    const incrementButton = screen.getByTestId("counter-increment-btn");
    fireEvent.click(incrementButton);
    expect(screen.getByTestId("counter-value")).toHaveTextContent(`${counterState.value + 1}`);
  });

  it("should decrement counter value by 1", () => {
    const decrementButton = screen.getByTestId("counter-decrement-btn");
    fireEvent.click(decrementButton);
    expect(screen.getByTestId("counter-value")).toHaveTextContent(`${counterState.value - 1}`);
  });
});
