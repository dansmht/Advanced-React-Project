import { screen } from "@testing-library/react";
import { PageLoader } from "widgets";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";

describe("PageLoader", () => {

  it("should render", () => {
    renderComponent(<PageLoader />);
    expect(screen.getByTestId("page-loader")).toBeInTheDocument();
  });
});
