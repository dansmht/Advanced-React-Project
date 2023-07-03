import { RootState } from "app/providers";

export const selectLoginStatus = (state: RootState) => state.login.status;
export const selectLoginErrorMessage = (state: RootState) => state.login.errorMessage;
