import { fireEvent, screen } from "@testing-library/react";
import { ThemeSwitcher } from "widgets";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";
import { LocalStorageKeys } from "shared/constants/localStorageKeys";

describe("ThemeSwitcher", () => {

  let rootHtml: HTMLElement;
  let toggleThemeButton: HTMLButtonElement;

  beforeEach(() => {
    renderComponent(<ThemeSwitcher />);
    rootHtml = document.documentElement;
    toggleThemeButton = screen.getByTestId("theme-switcher");
  });

  it("should render", () => {
    expect(toggleThemeButton).toBeInTheDocument();
  });

  it("should toggle theme from light to dark", () => {
    expect(rootHtml).toHaveClass("light");
    expect(rootHtml).not.toHaveClass("dark");
    fireEvent.click(toggleThemeButton);
    expect(rootHtml).toHaveClass("dark");
    expect(rootHtml).not.toHaveClass("light");
  });

  it("should toggle theme from dark to light", () => {
    fireEvent.click(toggleThemeButton);
    fireEvent.click(toggleThemeButton);
    expect(rootHtml).toHaveClass("light");
    expect(rootHtml).not.toHaveClass("dark");
  });

  it("should set theme to localstorage on toggle", () => {
    fireEvent.click(toggleThemeButton);
    expect(localStorage.getItem(LocalStorageKeys.THEME)).toEqual("dark");
    fireEvent.click(toggleThemeButton);
    expect(localStorage.getItem(LocalStorageKeys.THEME)).toEqual("light");
  });
});
