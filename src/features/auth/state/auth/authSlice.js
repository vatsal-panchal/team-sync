
import { createSlice } from "@reduxjs/toolkit";
import { currentLoggedInEmployee, loginEmployee } from "./authAction";

// createSlice creates the auth state and its actions.
const authSlice = createSlice({
  name: "auth", // Name of this slice in Redux.

  // Default values when the app starts.
  initialState: {
    employee: null, // Stores logged-in employee data.
    isLoading: true, // Checks if an API request is running.
  },

  // Actions used to change employee data directly.
  reducers: {
    addEmployee: (state, action) => {
      // Save the employee data sent with the action.
      state.employee = action.payload;
      state.isLoading = false;
    },

    removeEmployee: (state) => {
      // Clear employee data after logout.
      state.employee = null;
      state.isLoading = false;
    },
  },

  // Handle the results of API calls made with createAsyncThunk.
  extraReducers: (builder) => {
    // builder lets us handle different API request states.
    builder
      // Runs when login starts.
      .addCase(loginEmployee.pending, (state) => {
        state.isLoading = true;
      })

      // Runs when login succeeds.
      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.employee = action.payload; // Save returned employee data.
        state.isLoading = false;
      })

      // Runs when login fails.
      .addCase(loginEmployee.rejected, (state) => {
        state.isLoading = false;
      })

      // Runs when checking the logged-in employee starts.
      .addCase(currentLoggedInEmployee.pending, (state) => {
        state.isLoading = true;
      })

      // Runs when employee data is received successfully.
      .addCase(currentLoggedInEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        state.isLoading = false;
      })

      // Runs when getting employee data fails.
      .addCase(currentLoggedInEmployee.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

// Export actions so other files can use them.
export const { addEmployee, removeEmployee } = authSlice.actions;

// Export the reducer to add auth state to the Redux store.
export default authSlice.reducer;
