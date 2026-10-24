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
    <div>
      <div>navbar</div>
      <div>

        <div>top nav</div>
        {/* Show the page here. */}
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
