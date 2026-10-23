
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInsatnce } from "../../../../config/axiosInstance";

// Employee login ka async process handle karta hai.
//
// FLOW:
// 1. Login credentials receive karta hai.
// 2. Backend API par POST request bhejta hai.
// 3. Success par response data return karta hai.
// 4. Failure par error reject karta hai.
//
// Redux Toolkit automatically pending, fulfilled aur rejected
// states generate karta hai, jinhe auth slice mein handle karte hain.
export const loginEmployee = createAsyncThunk(
  // Login action ka unique type prefix.
  "auth/login",

  // credentials: Login form ka data.
  // thunkApi: Redux Toolkit utilities provide karta hai.
  async (credentials, thunkApi) => {
    try {
      // Credentials backend ke login endpoint par bhejte hain.
      // await API response aane ka wait karta hai.
      const res = await axiosInsatnce.post("/auth/login", credentials);

      // Successful response ka actual data return hota hai,
      // jo fulfilled action ke action.payload mein milta hai.
      return res.data.data;
    } catch (error) {
      // API fail hone par error rejected action ke action.payload
      // mein milta hai, jise auth slice mein handle kar sakte hain.
      return thunkApi.rejectWithValue(error);
    }
  },
);
