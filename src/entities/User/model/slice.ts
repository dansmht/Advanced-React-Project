import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "entities/User";

const initialState: UserState = {
  authData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
});

export const {
  actions: userActions,
  reducer: userReducer,
} = userSlice;
