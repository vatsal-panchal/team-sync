import { Bell, Lightbulb, Menu, Moon, Search } from "lucide-react";
import React from "react";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[var(--border-color)] bg-[var(--bg-main)] px-6 py-3 transition-colors duration-300">
      <div className="flex w-full max-w-md items-center gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] px-3 py-2 text-[var(--text-muted)] transition-colors duration-300 focus-within:border-[var(--text-muted)]">
        <Search size={18} />

        <input
          className="w-full bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
          type="text"
          placeholder="Search workspace.."
        />
      </div>

      <div className="flex items-center gap-5 text-[var(--text-muted)]">
        <Moon
          size={20}
          className="cursor-pointer transition-colors hover:text-[var(--text-primary)]"
        />
        <Lightbulb
          size={20}
          className="cursor-pointer transition-colors hover:text-[var(--text-primary)]"
        />
        <Bell
          size={20}
          className="cursor-pointer transition-colors hover:text-[var(--text-primary)]"
        />
        <Menu
          size={20}
          className="cursor-pointer transition-colors hover:text-[var(--text-primary)]"
        />
      </div>
    </div>
  );
};

export default TopNav;