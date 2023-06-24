import { RootState } from "app/providers";

export const selectCounter = (state: RootState) => state.counter;
export const selectCounterValue = (state: RootState) => state.counter.value;
