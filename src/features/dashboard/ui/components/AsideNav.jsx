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
    <div className="min-h-full bg-[var(--bg-card)]">
      {/* Brand */}
      <div className="flex h-16 flex-col justify-center border-b border-[var(--border-color)] px-5">
        <h1 className="text-base font-semibold tracking-tight text-[var(--text-primary)]">
          Team-sync
        </h1>
        <p className="text-xs text-[var(--text-muted)]">Enterprise workspace</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 p-3">
        <p className="mb-2 mt-3 px-3 text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
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
    </div>
  );
};

export default AsideNav;