import { createSlice } from "@reduxjs/toolkit";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";
import { LoginState } from "../types/loginTypes";

const initialState: LoginState = {
  status: "init",
  errorMessage: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginByUsername.fulfilled, (state, action) => {
        state.status = "success";
        console.log("SUCCESS ACTION", action.payload);
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.status = "error";
        state.errorMessage = action.payload;
        console.error("ERROR ACTION", action);
      });
  }
});

export const {
  reducer: loginReducer,
} = loginSlice;
