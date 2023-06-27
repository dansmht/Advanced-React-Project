import { RootState } from "app/providers";

export const selectUser = (state: RootState) => state.counter;
export const selectUsername = (state: RootState) => state.counter.value;
