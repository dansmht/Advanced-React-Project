import { fireEvent, screen } from "@testing-library/react";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";
import { SideBar } from "widgets";

describe("SideBar", () => {

  beforeEach(() => {
    renderComponent(<SideBar />);
  });

  it("should render", () => {
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar-toggle")).toBeInTheDocument();
    expect(screen.getByText("main")).toBeInTheDocument();
    expect(screen.getByText("about")).toBeInTheDocument();
  });

  it("should not be toggled by default", () => {
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });

  it("should toggle", () => {
    const toggleButton = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
