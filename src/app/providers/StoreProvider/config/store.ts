import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { RootState } from "./RootState";
import { counterReducer } from "entities/Counter";
import { userReducer } from "entities/User";

export const createReduxStore = (preloadedState?: RootState) => {

  const reducer: ReducersMapObject<RootState> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<RootState>({
    reducer,
    devTools: __IS_DEV__,
    preloadedState,
  });
};
