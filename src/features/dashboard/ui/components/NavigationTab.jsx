import { NavLink } from "react-router";

const NavigationTab = ({ path, title, Icon }) => {
  return (
    <NavLink
      to={path}
      end={path === "/home"}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-lg px-3 py-2 ${
          isActive
            ? "bg-[var(--bg-card)] text-[var(--text-primary)]"
            : "text-[var(--text-secondary)] hover:bg-[var(--bg-card)]"
        }`
      }
    >
      <Icon size={20} />
      <span>{title}</span>
    </NavLink>
  );
};

export default NavigationTab;