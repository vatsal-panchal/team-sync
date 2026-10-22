import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInsatnce } from "../../../../config/axiosInstance";

export const loginEmployee = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      let res = await axiosInsatnce.post("/auth/login", credentials);

      return res.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
