import { createSlice } from "@reduxjs/toolkit";
import { loginEmployee } from "./authAction";

// createSlice = Redux me state aur usko change karne ke functions banata hai
const authsSlice = createSlice({
  name: "auth", // Is slice ka naam auth hai

  // Starting me employee login nahi hai aur loading bhi nahi ho rahi
  initialState: {
    employee: null,
    isLoading: false,
  },

  reducers: {
    // Employee ka data store karna (jaise login hone par)
    addEmployee: (state, action) => {
      ((state.employee = action.payload), // Payload se employee ka data milega
        (state.isLoading = false)); // Data mil gaya, loading band
    },

    // Employee ka data clear karna (jaise logout hone par)
    removeEmployee: (state) => {
      ((state.employee = null), // Employee ka data hata do
        (state.isLoading = false)); // Loading band kar do
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginEmployee.fulfilled,(state,action) =>{
        state.employee = action.payload,
        state.isLoading = false
      })
      .addCase(loginEmployee.rejected,(state) =>{
        state.isLoading = false
      });
  },
});

// In functions ko component me dispatch karke state change kar sakte hain
export const { addEmployee, removeEmployee } = authsSlice.actions;

// Store me use karne ke liye reducer export kar rahe hain
export default authsSlice.reducer;
