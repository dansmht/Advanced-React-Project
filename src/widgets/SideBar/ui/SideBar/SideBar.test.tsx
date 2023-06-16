import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { SideBar } from "widgets";

describe("SideBar", () => {
  it("should render", () => {
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });
  it("should not be toggled by default", () => {
    renderWithTranslation(<SideBar />);
    expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
  });
  it("should toggle", () => {
    renderWithTranslation(<SideBar />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
