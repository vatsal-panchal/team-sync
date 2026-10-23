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

const AppRoutes = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    (() => {
      dispatch(currentLoggedInEmployee());
    })();
  }, []);

  const router = createBrowserRouter([
    //auth routes
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },

    // dashboard routes
    {
      path: "/home",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <DashBoardLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
