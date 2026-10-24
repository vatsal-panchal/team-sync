import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/state/auth/authSlice";

// Create the Redux store and add the auth reducer.
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});