import { screen } from "@testing-library/react";
import { LangSwitcher } from "widgets";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";

describe("LangSwitcher", () => {

  it("should render", () => {
    renderComponent(<LangSwitcher />);
    expect(screen.getByTestId("lang-switcher")).toBeInTheDocument();
    expect(screen.getByText("language")).toBeInTheDocument();
  });
});
