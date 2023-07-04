import { RootState } from "app/providers";

export const selectUserStatus = (state: RootState) => state.user.status;
export const selectUser = (state: RootState) => state.user.authData;
export const selectIsAuthenticated = (state: RootState) => !!state.user.authData;
