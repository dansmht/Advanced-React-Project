import { screen } from "@testing-library/react";
import { Label } from "shared/ui";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";

describe("Label", () => {

  it("should render", () => {
    renderComponent(<Label>Label</Label>);
    expect(screen.getByTestId("label")).toBeInTheDocument();
    expect(screen.getByText("Label")).toBeInTheDocument();
  });
});
