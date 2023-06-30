import { screen } from "@testing-library/react";
import { Input, InputGroup, Label } from "shared/ui";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";

describe("InputGroup", () => {

  it("should render", () => {
    renderComponent(<InputGroup>InputGroup</InputGroup>);
    expect(screen.getByTestId("input-group")).toBeInTheDocument();
    expect(screen.getByText("InputGroup")).toBeInTheDocument();
  });

  it("should render without wrapper", () => {
    renderComponent(<InputGroup asFragment>InputGroup</InputGroup>);
    expect(screen.queryByTestId("input-group")).not.toBeInTheDocument();
    expect(screen.getByText("InputGroup")).toBeInTheDocument();
  });

  it("should connect Label with Input by id", () => {
    renderComponent(
      <InputGroup>
        <Label />
        <Input />
      </InputGroup>
    );
    expect(screen.getByTestId("label")).toHaveAttribute("for");
    expect(screen.getByTestId("input")).toHaveAttribute("id");
  });
});
