import { DeepPartial } from "@reduxjs/toolkit";
import { RootState } from "app/providers";
import { CounterState } from "entities/Counter";

export const counterState: CounterState = {
  value: 10,
};

export const rootState : DeepPartial<RootState> = {
  counter: counterState,
};
