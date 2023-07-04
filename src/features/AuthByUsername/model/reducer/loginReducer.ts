import { createReducer } from "@reduxjs/toolkit";
import { loginByUsername } from "../services/loginByUsername/loginByUsername";
import { LoginState } from "../types/loginTypes";

const initialState: LoginState = {
  status: "init",
  errorMessage: null,
};

export const loginReducer = createReducer(
  initialState,
  (builder) => {
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
        console.error("ERROR ACTION 222", action);
      });
  });
