import { screen } from "@testing-library/react";
import { Input } from "shared/ui";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";

describe("Input", () => {

  it("should render", () => {
    renderComponent(<Input />);
    expect(screen.getByTestId("input-wrapper")).toBeInTheDocument();
    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByTestId("input-wrapper").childNodes.length).toEqual(1);
  });

  it("should have class outline by default", () => {
    renderComponent(<Input />);
    expect(screen.getByTestId("input-wrapper")).toHaveClass("outline");
  });

  it("should render left adornment", () => {
    renderComponent(<Input leftAdornment={<i>left</i>} />);
    expect(screen.getByText("left")).toBeInTheDocument();
    expect(screen.getByTestId("input-wrapper").childNodes.length).toEqual(2);
  });

  it("should render right adornment", () => {
    renderComponent(<Input rightAdornment={<i>right</i>} />);
    expect(screen.getByText("right")).toBeInTheDocument();
    expect(screen.getByTestId("input-wrapper").childNodes.length).toEqual(2);
  });

  it("should render both adornments", () => {
    renderComponent(<Input leftAdornment={<i>left</i>} rightAdornment={<i>right</i>} />);
    expect(screen.getByText("left")).toBeInTheDocument();
    expect(screen.getByText("right")).toBeInTheDocument();
    expect(screen.getByTestId("input-wrapper").childNodes.length).toEqual(3);
  });
});
