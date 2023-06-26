import { screen } from "@testing-library/react";
import { PageError } from "widgets";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";

describe("PageError", () => {

  it("should render", () => {
    renderComponent(<PageError />);
    expect(screen.getByTestId("page-error")).toBeInTheDocument();
    expect(screen.getByText("errorMessage")).toBeInTheDocument();
    expect(screen.getByText("reloadPage")).toBeInTheDocument();
  });
});
