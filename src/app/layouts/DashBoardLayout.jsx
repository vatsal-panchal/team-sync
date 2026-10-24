import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";

const DashBoardLayout = () => {
  // Get the current theme from Redux.
  let { mode } = useSelector((store) => store.theme);

  useEffect(() => {
    if (mode === "light") {
      // Add the "light" class from index.css to show light theme.
      document.body.classList.add("light");
    } else {
      // Remove the "light" class to show the default dark theme.
      // Dark is the default theme from :root in index.css, so no need to add a dark class.
      document.body.classList.remove("light");
    }
  }, [mode]); // Run this code when the theme changes.

  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[auto_minmax(0,1fr)] overflow-hidden bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300 md:grid-cols-[240px_minmax(0,1fr)] md:grid-rows-1">
      {/* Sidebar */}
      <div className="overflow-y-auto border-b border-[var(--border-color)] bg-[var(--bg-surface)] p-5 text-xs font-medium uppercase tracking-[0.3em] text-[var(--text-muted)] transition-colors duration-300 md:border-b-0 md:border-r">
        navbar
      </div>

      {/* Main area */}
      <div className="flex min-h-0 flex-col overflow-y-auto">
        {/* Top bar */}
        <div className="sticky top-0 z-10 shrink-0 border-b border-[var(--border-color)] bg-[var(--bg-main)] px-6 py-4 text-xs font-medium uppercase tracking-[0.3em] text-[var(--text-muted)] transition-colors duration-300">
          top nav
        </div>

        {/* Show the page here. */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;