import { screen } from "@testing-library/react";
import { Loader } from "shared/ui";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";

describe("Loader", () => {

  it("should render", () => {
    renderComponent(<Loader />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
