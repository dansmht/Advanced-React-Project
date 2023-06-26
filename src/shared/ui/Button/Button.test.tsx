import { screen } from "@testing-library/react";
import { Button, ButtonTheme } from "shared/ui";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";

describe("Button", () => {

  it("should render", () => {
    renderComponent(<Button>Button</Button>);
    expect(screen.getByTestId("button")).toBeInTheDocument();
    expect(screen.getByText("Button")).toBeInTheDocument();
  });

  it("should have class clear by default", () => {
    renderComponent(<Button>Button</Button>);
    expect(screen.getByTestId("button")).toHaveClass("clear");
  });

  it("should have class filled if theme prop is filled", () => {
    renderComponent(<Button theme={ButtonTheme.FILLED}>Button</Button>);
    expect(screen.getByTestId("button")).toHaveClass("filled");
  });
});
