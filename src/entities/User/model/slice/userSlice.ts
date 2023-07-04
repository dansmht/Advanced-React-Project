import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initializeUser, User, UserState } from "entities/User";
import { LocalStorageKeys } from "shared/constants/localStorageKeys";

const initialState: UserState = {
  authData: null,
  status: "init",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    logout: (state) => {
      state.authData = null;
      localStorage.removeItem(LocalStorageKeys.TOKEN);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeUser.pending, (state) => {
        state.status = "pending";
      })
      .addCase(initializeUser.fulfilled, (state, action) => {
        console.log("USEEEEEEEEEEEEEEEEEEEER", action.payload);
        state.authData = action.payload;
        state.status = "initialized";
      })
      .addCase(initializeUser.rejected, (state) => {
        state.status = "initialized";
      });
  },
});

export const {
  actions: userActions,
  reducer: userReducer,
} = userSlice;
