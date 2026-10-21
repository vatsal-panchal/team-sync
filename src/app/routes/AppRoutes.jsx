import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../../features/auth/ui/pages/LoginPage";
import RegisterPage from "../../features/auth/ui/pages/RegisterPage";
import DashBoardLayout from "../layouts/DashBoardLayout";

const AppRoutes = () => {
  const router = createBrowserRouter([
    //auth routes
    {
      path: "/",
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


    //

    {
        path:"/home",
        element:<DashBoardLayout/>,
        children:[
            
        ]
    }
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
