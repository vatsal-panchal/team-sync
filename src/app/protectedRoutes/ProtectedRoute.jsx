
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  // Get employee data and loading status from the Redux store.
  let { employee, isLoading } = useSelector((store) => store.auth);

  // Show a loader while checking the login status.
  if (isLoading)
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#121212] px-4">
        {/* Show a simple background design. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] bg-[radial-gradient(closest-side,rgba(255,255,255,0.035),transparent)] shadow-[inset_0_0_140px_rgba(255,255,255,0.03)]"
        />

        <div
          role="status"
          aria-live="polite"
          className="relative z-10 flex flex-col items-center gap-5"
        >
          {/* Show a spinning loader. */}
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-white/70 motion-reduce:animate-pulse" />
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-400">
            Loading
          </p>
        </div>
      </div>
    );

  // Send users who are not logged in to the login page.
  if (!employee) {
    return <Navigate to={"/"} />;
  }

  // Show the child page if the employee is logged in.
  return <Outlet />;
};

export default ProtectedRoute;
