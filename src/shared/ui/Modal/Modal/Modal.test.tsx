import { fireEvent, screen, waitFor } from "@testing-library/react";
import { Modal } from "shared/ui";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";
import { EventCodes } from "shared/constants/eventCodes";

describe("Modal", () => {

  const onClose = jest.fn();

  it("should not render if isOpen prop is false", () => {
    renderComponent(<Modal isOpen={false} onClose={onClose}>Modal Body</Modal>);
    expect(screen.queryByTestId("modal-overlay")).not.toBeInTheDocument();
  });

  it("should render if isOpen prop is true", () => {
    renderComponent(<Modal isOpen={true} onClose={onClose}>Body</Modal>);
    expect(screen.getByTestId("modal-overlay")).toBeInTheDocument();
    expect(screen.getByTestId("modal-content")).toBeInTheDocument();
    expect(screen.getByTestId("modal-esc-btn")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
    expect(screen.getByText("ESC")).toBeInTheDocument();
  });

  it("should not close on content click", () => {
    renderComponent(<Modal isOpen={true} onClose={onClose}>Body</Modal>);
    fireEvent.click(screen.getByTestId("modal-content"));
    expect(onClose).toHaveBeenCalledTimes(0);
  });

  it("should close on overlay click", async () => {
    renderComponent(<Modal isOpen={true} onClose={onClose}>Body</Modal>);
    fireEvent.click(screen.getByTestId("modal-overlay"));
    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
  });

  it("should close on escape button click", async () => {
    renderComponent(<Modal isOpen={true} onClose={onClose}>Body</Modal>);
    fireEvent.click(screen.getByTestId("modal-esc-btn"));
    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
  });

  it("should close on escape press", async () => {
    renderComponent(<Modal isOpen={true} onClose={onClose}>Body</Modal>);
    fireEvent.keyDown(document, { key: EventCodes.ESCAPE, code: EventCodes.ESCAPE });
    await waitFor(() => expect(onClose).toHaveBeenCalledTimes(1));
  });
});
