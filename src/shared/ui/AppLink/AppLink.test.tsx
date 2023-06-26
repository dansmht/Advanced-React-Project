import { fireEvent, screen } from "@testing-library/react";
import { AppLink, AppLinkTheme } from "shared/ui";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";

describe("AppLink", () => {

  it("should render", () => {
    renderComponent(<AppLink to='/'>AppLink</AppLink>);
    expect(screen.getByTestId("app-link")).toBeInTheDocument();
    expect(screen.getByText("AppLink")).toBeInTheDocument();
    expect(screen.getByTestId("app-link").childNodes.length).toEqual(1);
  });

  it("should have class primary by default", () => {
    renderComponent(<AppLink to='/'>AppLink</AppLink>);
    expect(screen.getByTestId("app-link")).toHaveClass("primary");
    expect(screen.getByTestId("app-link")).not.toHaveClass("secondary");
  });

  it("should have class secondary if theme prop is secondary", () => {
    renderComponent(<AppLink to='/' theme={AppLinkTheme.SECONDARY}>AppLink</AppLink>);
    expect(screen.getByTestId("app-link")).toHaveClass("secondary");
    expect(screen.getByTestId("app-link")).not.toHaveClass("primary");
  });

  it("should have class Active on root route", () => {
    renderComponent(<AppLink to='/' checkIsActive>AppLink</AppLink>);
    expect(screen.getByTestId("app-link")).toHaveClass("Active");
  });

  it("should have class Active on special route", () => {
    renderComponent(<AppLink to='/test' checkIsActive>AppLink</AppLink>);
    expect(screen.getByTestId("app-link")).not.toHaveClass("Active");
    fireEvent.click(screen.getByTestId("app-link"));
    expect(screen.getByTestId("app-link")).toHaveClass("Active");
  });

  it("should render leftIcon", () => {
    renderComponent(<AppLink to='/' leftIcon="left">AppLink</AppLink>);
    expect(screen.getByText(/left/)).toBeInTheDocument();
    expect(screen.getByTestId("app-link").childNodes.length).toEqual(2);
  });

  it("should render rightIcon", () => {
    renderComponent(<AppLink to='/' rightIcon="right">AppLink</AppLink>);
    expect(screen.getByText(/right/)).toBeInTheDocument();
    expect(screen.getByTestId("app-link").childNodes.length).toEqual(2);
  });

  it("should render both icons", () => {
    renderComponent(<AppLink to='/' leftIcon="left" rightIcon="right">AppLink</AppLink>);
    expect(screen.getByText(/left/)).toBeInTheDocument();
    expect(screen.getByText(/right/)).toBeInTheDocument();
    expect(screen.getByTestId("app-link").childNodes.length).toEqual(3);
  });
});
