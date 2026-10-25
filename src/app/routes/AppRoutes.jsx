import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useDispatch } from "react-redux";

import AuthLayout from "../layouts/AuthLayout";
import DashBoardLayout from "../layouts/DashBoardLayout";

import LoginPage from "../../features/auth/ui/pages/LoginPage";
import RegisterPage from "../../features/auth/ui/pages/RegisterPage";
import { currentLoggedInEmployee } from "../../features/auth/state/auth/authAction";

import PublicRoute from "../protectedRoutes/PublicRoute";
import ProtectedRoute from "../protectedRoutes/ProtectedRoute";
import RoleBaseRoute from "../protectedRoutes/RoleBaseRoute";

import { commonRoutes } from "./commonRoutes";
import { adminRoutes } from "./adminRoutes";
import { employeeRoutes } from "./employeeRoutes";

const AppRoutes = () => {
  // Get dispatch so we can start the login check.
  let dispatch = useDispatch();

  useEffect(() => {
    // When the app opens or reloads, check if an employee is already logged in.
    // This helps the app know the employee's details before opening protected pages.
    (() => {
      dispatch(currentLoggedInEmployee());
    })();
  }, []);

  // Set up all the URLs and the pages they should open.
  const router = createBrowserRouter([
    {
      // These pages can be opened without logging in.
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          // Use the same layout for login and register pages.
          path: "",
          element: <AuthLayout />,
          children: [
            {
              // Open the login page at "/".
              path: "",
              element: <LoginPage />,
            },
            {
              // Open the register page at "/register".
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },

    {
      // Only logged-in employees can open pages under "/home".
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          // Use the same dashboard layout for all home pages.
          path: "",
          element: <DashBoardLayout />,
          children: [
            // Both admin and employee can open these pages.
            ...commonRoutes,

            {
              // Only users with the admin role can open these pages.
              element: <RoleBaseRoute allowedRoles={"admin"} />,
              children: adminRoutes,
            },
            {
              // Only users with the employee role can open these pages.
              element: <RoleBaseRoute allowedRoles={"employee"} />,
              children: employeeRoutes,
            },
          ],
        },
      ],
    },
  ]);

  // Give the router to the app so it can show the correct page for each URL.
  return <RouterProvider router={router} />;
};

export default AppRoutes;