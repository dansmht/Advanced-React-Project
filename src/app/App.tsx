import { Suspense } from "react";
import classNames from "classnames";
import { AppRouter, useTheme } from "app/providers";
import { NavBar, SideBar } from "widgets";
import { Button, Loader } from "shared/ui";
import classes from "./App.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { useModal } from "shared/lib/hooks/useModal";

export const App = () => {

  useTheme();

  const {isOpen,onClose, onOpen} = useModal();

  return (
    <Suspense fallback={<Loader />}>
      <div className={classNames(classes.App)}>
        <NavBar />
        <Button onClick={onOpen}>Open</Button>

        <div className={classes.Content}>
          <SideBar />
          <AppRouter />
        </div>
        <Modal isOpen={isOpen} title="Auth" onClose={onClose} />
      </div>
    </Suspense>
  );
};
