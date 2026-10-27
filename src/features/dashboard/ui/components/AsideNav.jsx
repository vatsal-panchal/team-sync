import { ChartArea } from "lucide-react";
import { useSelector } from "react-redux";
import NavigationTab from "./NavigationTab";
import {
  adminNavigation,
  employeeNavigation,
} from "../../../../app/constants/Navigation";

const AsideNav = () => {
  let { employee } = useSelector((store) => store.auth);

  let navigations =
    employee?.role === "admin" ? adminNavigation : employeeNavigation;

  return (
    <aside className="min-h-full">
      <div className="flex items-center gap-3 px-5 py-5">
        <ChartArea size={24} />

        <div>
          <h1 className="font-semibold text-[var(--text-primary)]">
            Team-sync
          </h1>
          <p className="text-xs text-[var(--text-muted)]">
            Enterprise workspace
          </p>
        </div>
      </div>

      <nav className="flex flex-col gap-1 px-3">
        {navigations.map((route) => (
          <NavigationTab
            key={route.path}
            path={route.path}
            Icon={route.Icon}
            title={route.title}
          />
        ))}
      </nav>
    </aside>
  );
};

export default AsideNav;