import { render, screen } from "@testing-library/react";
import { Button } from "shared/ui";

describe("Button", () => {

  it("should render", () => {
    const text = "test";
    render(<Button>{text}</Button>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should have initial classname", () => {
    const text = "test";
    render(<Button>{text}</Button>);
    expect(screen.getByText(text)).toHaveClass("Button");
    expect(screen.getByText(text)).toHaveClass("clear");
  });

  it("should have additional classname", () => {
    const text = "test";
    const className = "className";
    render(<Button className={className}>{text}</Button>);
    expect(screen.getByText(text)).toHaveClass(className);
  });
});
