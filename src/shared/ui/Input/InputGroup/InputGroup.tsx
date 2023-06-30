import { Children, cloneElement, FC, ReactElement, ReactNode, useId } from "react";
import classes from "./InputGroup.scss";
import classNames from "classnames";

interface InputGroupProps {
  asFragment?: boolean;
  direction?: "vertically" | "horizontally";
  className?: string;
  children?: ReactNode;
}

export const InputGroup: FC<InputGroupProps> = ({
  asFragment,
  direction = "vertically",
  className,
  children,
}) => {

  const id = useId();

  const clones = Children.toArray(children).map((child: ReactElement) => {

    if (!child.type || typeof child.type === "string") {
      return child;
    }

    // Connect Input and Label by id
    if (child.type.name === "Input") {
      return cloneElement(child, Object.assign({ id }, child.props));
    }
    if (child.type.name === "Label") {
      return cloneElement(child, Object.assign({ htmlFor: id }, child.props));
    }

    return child;
  });

  if (asFragment) {
    return clones.map((clone) => clone);
  }

  return (
    <div
      data-testid="input-group"
      className={classNames(classes.InputGroup, classes[direction], className)}
    >
      {clones.map((clone) => clone)}
    </div>
  );
};
