import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "entities/User";
import { userActions } from "entities/User/model/slice/userSlice";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  "login/loginByUsername",
  async (userCredentials, thunkAPI) => {

    const body = JSON.stringify(userCredentials);

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      const result = await response.json();

      console.log("Response status code", response.status, response.ok, result);
      if (response.status < 200 || response.status >= 300) {
        return thunkAPI.rejectWithValue(result.message);
      }
      if (!result) {
        return thunkAPI.rejectWithValue("SERVER ERROR");
      }

      thunkAPI.dispatch(userActions.setAuthData(result));

      return result;
    } catch (err) {
      console.warn("ERROR loginByUsername", err);
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
