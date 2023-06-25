import type { Meta, StoryObj } from "@storybook/react";
import { Button, Modal } from "shared/ui";
import { useModal } from "shared/lib/hooks/useModal";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

const ModalWithHook = ({ initialIsOpen = false }: { initialIsOpen?: boolean }) => {

  const {
    isOpen,
    onClose,
    onOpen,
  } = useModal(initialIsOpen);

  return (
    <>
      <Button onClick={onOpen}>
        Open Modal
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        title="Modal"
      >
        Content
      </Modal>
    </>
  );
};

export const ModalWithButton: Story = {
  render: () => <ModalWithHook />
};

export const ModalWithButtonOpen: Story = {
  render: () => <ModalWithHook initialIsOpen />
};
