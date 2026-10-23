
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInsatnce } from "../../../../config/axiosInstance";

export const loginEmployee = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const res = await axiosInsatnce.post("/auth/login", credentials);
      return res.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);

export const currentLoggedInEmployee = createAsyncThunk(
  "auth/me",
  async (_, thunkApi) => {
    try {
      const res = await axiosInsatnce.get("/auth/me");
      console.log(res.data);

      return res.data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
