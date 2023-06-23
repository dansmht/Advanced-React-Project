import { Variants, Transition } from "framer-motion";

export const overlayVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const contentVariants: Variants = {
  initial: {
    scale: 0.8,
    originY: 0.7,
  },
  animate: {
    scale: 1,
    originY: 0.5,
  },
  exit: {
    scale: 0.9,
    originY: 0.6,
  }
};

export const transition: Transition = {
  duration: 0.1,
};
