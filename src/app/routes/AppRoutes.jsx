
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../../features/auth/ui/pages/LoginPage";
import RegisterPage from "../../features/auth/ui/pages/RegisterPage";
import DashBoardLayout from "../layouts/DashBoardLayout";
import HomePage from "../../features/dashboard/ui/pages/HomePage";
import { useDispatch } from "react-redux";
import { currentLoggedInEmployee } from "../../features/auth/state/auth/authAction";
import PublicRoute from "../protectedRoutes/PublicRoute";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import { commonRoutes } from "./commonRoutes";

const AppRoutes = () => {
  // dispatch sends actions to Redux.
  let dispatch = useDispatch();

  // Run this effect when the component first loads.
  useEffect(() => {
    // Check if an employee is already logged in.
    (() => {
      dispatch(currentLoggedInEmployee());
    })();
  }, []);

  // Create all app routes and decide which pages they show.
  const router = createBrowserRouter([
    // Public routes for login and register pages.
    {
      path: "/",
      element: <PublicRoute />, // Redirect logged-in users away from public pages.
      children: [
        {
          path: "",
          element: <AuthLayout />, // Common layout for auth pages.
          children: [
            {
              path: "",
              element: <LoginPage />, // Show login page at "/".
            },
            {
              path: "register",
              element: <RegisterPage />, // Show register page at "/register".
            },
          ],
        },
      ],
    },

    // Protected routes for logged-in employees.
    {
      path: "/home",
      element: <ProtectedRoute />, // Redirect users who are not logged in.
      children: [
        {
          path: "",
          element: <DashBoardLayout />, // Common layout for dashboard pages.
          children: [
            ...commonRoutes
          ]
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
