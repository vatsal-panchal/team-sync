import { NavLink } from "react-router";

const NavigationTab = ({ path, title, Icon }) => {
  return (
    <NavLink
      to={path}
      end={path === "/home"}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
          isActive
            ? "border-[var(--border-color)] bg-[var(--bg-hover)] text-[var(--text-primary)]"
            : "border-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon size={18} className={isActive ? "text-[var(--tertiary)]" : ""} />
          <span>{title}</span>
        </>
      )}
    </NavLink>
  );
};

export default NavigationTab;