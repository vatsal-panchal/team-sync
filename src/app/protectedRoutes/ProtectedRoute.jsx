
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Loader from "../../shared/ui/components/Loader";

const ProtectedRoute = () => {
  // Get employee data and loading status from the Redux store.
  let { employee, isLoading } = useSelector((store) => store.auth);

  // Show a loader while checking the login status.
  if (isLoading) return <Loader/>

  // Send users who are not logged in to the login page.
  if (!employee) {
    return <Navigate to={"/"} />;
  }

  // Show the child page if the employee is logged in.
  return <Outlet />;
};

export default ProtectedRoute;
