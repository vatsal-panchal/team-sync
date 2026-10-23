import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PublicRoute = () => {
  let { employee, isLoading } = useSelector((store) => store.auth);

  if (isLoading)
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#121212] px-4">
        {/* Decorative background ring */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] bg-[radial-gradient(closest-side,rgba(255,255,255,0.035),transparent)] shadow-[inset_0_0_140px_rgba(255,255,255,0.03)]"
        />

        <div
          role="status"
          aria-live="polite"
          className="relative z-10 flex flex-col items-center gap-5"
        >
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-white/70 motion-reduce:animate-pulse" />
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-neutral-400">
            Loading
          </p>
        </div>
      </div>
    );

  if (employee) {
    return <Navigate to={"/home"} />;
  }

  return <Outlet />;
};

export default PublicRoute;