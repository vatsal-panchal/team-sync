
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";
import Loader from "../../shared/ui/components/Loader";

const PublicRoute = () => {
  // Get employee data and loading status from the Redux store.
  let { employee, isLoading } = useSelector((store) => store.auth);

  // Show a loader while checking the login status.
  if (isLoading) return <Loader/>

  // Send logged-in employees to the home page.
  if (employee) {
    return <Navigate to={"/home"} />;
  }

  // Show the login or register page if not logged in.
  return <Outlet />;
};

export default PublicRoute;



