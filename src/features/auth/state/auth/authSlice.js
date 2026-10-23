
import { createSlice } from "@reduxjs/toolkit";
import { loginEmployee } from "./authAction";

// createSlice = Redux me state aur usko change karne wale functions banata hai
const authSlice = createSlice({
  name: "auth", // Is slice ka naam auth hai

  // Starting me employee login nahi hai aur loading bhi nahi ho rahi
  initialState: {
    employee: null,
    isLoading: false,
  },

  reducers: {
    // Employee ka data store karna
    addEmployee: (state, action) => {
      state.employee = action.payload; // Payload se employee ka data milega
      state.isLoading = false; // Loading band kar do
    },

    // Employee ka data clear karna (logout ke time)
    removeEmployee: (state) => {
      state.employee = null; // Employee ka data hata do
      state.isLoading = false; // Loading band kar do
    },
  },

  // createAsyncThunk use kiya hai, isliye API ki 3 states handle kar rahe hain:
  // pending = API call chal rahi hai
  // fulfilled = API call successful ho gayi
  // rejected = API call fail ho gayi
  extraReducers: (builder) => {
    builder
      .addCase(loginEmployee.pending, (state) => {
        state.isLoading = true; // API call chal rahi hai, loading chalu karo
      })
      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.employee = action.payload; // Login successful, employee ka data save karo
        state.isLoading = false; // Loading band kar do
      })
      .addCase(loginEmployee.rejected, (state) => {
        state.isLoading = false; // Login fail hone par loading band kar do
      });
  },
});

// In actions ko component me dispatch karke state change kar sakte hain
export const { addEmployee, removeEmployee } = authSlice.actions;

// Store me use karne ke liye reducer export kar rahe hain
export default authSlice.reducer;
