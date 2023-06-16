import { FC } from "react";
import classNames from "classnames";
import classes from "./Loader.scss";

interface LoaderProps {
  className?: string;
}

export const Loader: FC<LoaderProps> = ({ className }) => {
  return (
    <div className={classNames(classes.Loader, className)} />
  );
};
