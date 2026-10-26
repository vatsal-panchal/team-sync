import React from "react";
import { NavLink } from "react-router";
import NavigationTab from "./NavigationTab";
import { ChartArea } from "lucide-react";

const AsideNav = () => {
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

      <NavigationTab path={"/home/chat"} Icon={<ChartArea/>} title={"chat"}/>
    </div>
  );
};

export default AsideNav;
