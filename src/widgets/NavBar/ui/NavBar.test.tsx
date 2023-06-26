import { screen } from "@testing-library/react";
import { NavBar } from "widgets";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";

describe("NavBar", () => {

  it("should render", () => {
    renderComponent(<NavBar />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByText("advancedReactProject")).toBeInTheDocument();
    expect(screen.getByText("language")).toBeInTheDocument();
  });
});
