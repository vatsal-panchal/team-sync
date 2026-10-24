
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/state/auth/authSlice";

// configureStore creates the main Redux store for the app.
export const store = configureStore({
  // Add reducers to manage different parts of the app state.
  reducer: {
    // Store all auth-related data under the "auth" key.
    auth: authReducer,
  },
});
