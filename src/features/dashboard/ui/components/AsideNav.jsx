import React from "react";
import { NavLink } from "react-router";
import NavigationTab from "./NavigationTab";
import { ChartArea } from "lucide-react";
import { useSelector } from "react-redux";
import {
  adminNavigation,
  employeeNavigation,
} from "../../../../app/constants/Navigation";

const AsideNav = () => {
  let { employee } = useSelector((store) => store.auth);

  let navigations =
    employee?.role === "admin" ? adminNavigation : employeeNavigation;

  console.log(navigations);

  return (
    <div>
      <div className="flex flex-col gap-1 p-4">
        <h1 className="text-xl font-semibold text-[var(--text-primary)]">
          Team-sync
        </h1>

        <p className="text-sm text-[var(--text-secondary)]">
          Enterprise workspace
        </p>
      </div>

      <div className="flex flex-col gap-3 px-4 pb-4">
        {/* Navigation UI goes here */}
      </div>

      <div>
        {navigations.map((route) => {
          return (
            <NavigationTab
              key={route.path}
              path={route.path}
              Icon={route.Icon}
              title={route.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AsideNav;
