import { configureStore } from "@reduxjs/toolkit";
import { RootState } from "./RootState";
import { counterReducer } from "entities/Counter";

export const createReduxStore = (initialState?: RootState) => {
  return configureStore<RootState>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
};
