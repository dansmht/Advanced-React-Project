import { Suspense } from "react";
import classNames from "classnames";
import { AppRouter, useTheme } from "app/providers";
import { NavBar, SideBar } from "widgets";
import { Loader } from "shared/ui";
import classes from "./App.scss";

export const App = () => {

  useTheme();

  return (
    <Suspense fallback={<Loader />}>
      <div className={classNames(classes.App)}>
        <NavBar />

        <div className={classes.Content}>
          <SideBar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};
