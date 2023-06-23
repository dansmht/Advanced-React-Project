import { Suspense, useState } from "react";
import classNames from "classnames";
import { AppRouter, useTheme } from "app/providers";
import { NavBar, SideBar } from "widgets";
import { Button, Loader } from "shared/ui";
import classes from "./App.scss";
import { Modal } from "shared/ui/Modal/Modal";

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  useTheme();

  return (
    <Suspense fallback={<Loader />}>
      <div className={classNames(classes.App)}>
        <NavBar />
        <Button onClick={() => setIsOpen(true)}>Open</Button>

        <div className={classes.Content}>
          <SideBar />
          <AppRouter />
        </div>
        <Modal isOpen={isOpen} title="Auth" onClose={() => setIsOpen(false)} />
      </div>
    </Suspense>
  );
};
