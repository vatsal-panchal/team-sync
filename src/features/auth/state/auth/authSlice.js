
import { createSlice } from "@reduxjs/toolkit";
import { currentLoggedInEmployee, loginEmployee } from "./authAction";

const authSlice = createSlice({
  name: "auth",

  // Initial state: employee login nahi hai aur loading band hai
  initialState: {
    employee: null,
    isLoading: false,
  },

  reducers: {
    // Employee ka data store karna
    addEmployee: (state, action) => {
      state.employee = action.payload;
      state.isLoading = false;
    },

    // Logout ke time employee ka data clear karna
    removeEmployee: (state) => {
      state.employee = null;
      state.isLoading = false;
    },
  },

  // createAsyncThunk ki 3 API states handle karte hain:
  // pending = request start, fulfilled = success, rejected = failure
  extraReducers: (builder) => {
    builder
      .addCase(loginEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoading = false;
      })
      .addCase(loginEmployee.rejected, (state) => {
        state.isLoading = false;
      })

      //curretn Login employee API ke liye
      .addCase(currentLoggedInEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentLoggedInEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoading = false;
      })
      .addCase(currentLoggedInEmployee.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// Components mein use karne ke liye actions export kar rahe hain
export const { addEmployee, removeEmployee } = authSlice.actions;

export default authSlice.reducer;
