import { FC } from "react";
import classNames from "classnames";
import { Loader } from "shared/ui";
import classes from "./PageLoader.scss";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
  return (
    <div className={classNames(classes.PageLoaderWrapper, className)}>
      <Loader className={classes.Loader} />
    </div>
  );
};
