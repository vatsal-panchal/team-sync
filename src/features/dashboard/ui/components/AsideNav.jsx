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
    <aside className="min-h-full bg-[var(--bg-card)]">
      {/* Brand */}
      <div className="border-b-2 border-[var(--border-color)] px-5 py-6">
        <div className="flex items-center gap-3">
          <div className="min-w-0">
            <h1 className="text-lg font-extrabold tracking-tight text-[var(--text-primary)]">
              Team-sync
            </h1>

            <p className="mt-0.5 text-xs font-medium text-[var(--text-muted)]">
              Enterprise workspace
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 px-3 py-5">
        <p className="mb-2 px-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[var(--text-muted)]">
          Workspace Menu
        </p>

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