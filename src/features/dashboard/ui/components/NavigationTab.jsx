import React from 'react'
import { NavLink } from 'react-router'

const NavigationTab = ({ path, title, Icon }) => {
  return (
    <NavLink
      to={path}
      end="/"
      className={({ isActive }) =>
        isActive
          ? "flex items-center gap-4 rounded-md bg-blue-600 px-4 py-2 text-white"
          : "flex items-center gap-4 rounded-md px-4 py-2 text-gray-600 hover:bg-gray-100"
      }
    >
      <Icon size={21} />
      {title}
    </NavLink>
  );
};

export default NavigationTab;