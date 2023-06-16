import { Suspense } from "react";
import classNames from "classnames";
import { AppRouter, useTheme } from "app/providers";
import { NavBar, SideBar } from "widgets";
import { Loader } from "shared/ui";
import classes from "./styles/index.scss";

export const App = () => {

  const { theme } = useTheme();

  return (
    <Suspense fallback={<Loader />}>
      <div className={classNames(classes.App, classes[theme])}>
        <NavBar />

        <div className={classes.Content}>
          <SideBar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};
