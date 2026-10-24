
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../../config/axiosInstance";

// createAsyncThunk handles API request states: pending, fulfilled, and rejected.
export const loginEmployee = createAsyncThunk(
  "auth/login", // Action name used by Redux to track this request.

  // credentials contains form data, and thunkApi helps handle errors.
  async (credentials, thunkApi) => {
    try {
      // Send login details to the backend using a POST request.
      const res = await axiosInstance.post("/auth/login", credentials);

      // Return employee data so Redux can save it.
      return res.data.data;
    } catch (error) {
      // Send the error to Redux if login fails.
      return thunkApi.rejectWithValue(error);
    }
  },
);

// Check if an employee is already logged in.
export const currentLoggedInEmployee = createAsyncThunk(
  "auth/me", // Action name used by Redux to track this request.

  // _ means no input data is needed; thunkApi helps handle errors.
  async (_, thunkApi) => {
    try {
      // Ask the backend for the currently logged-in employee.
      const res = await axiosInstance.get("/auth/me");
      console.log(res.data);

      // Return employee data so Redux can save it.
      return res.data.user;
    } catch (error) {
      // Send the error to Redux if the request fails.
      return thunkApi.rejectWithValue(error);
    }
  },
);
