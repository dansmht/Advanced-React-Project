import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, UserWithToken } from "../types/userTypes";

const initialState: UserState = {
  authData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<UserWithToken>) => {
      state.authData = action.payload;
    }
  },
});

export const {
  actions: userActions,
  reducer: userReducer,
} = userSlice;
