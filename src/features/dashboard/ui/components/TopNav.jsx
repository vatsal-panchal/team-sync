import { Bell, Lightbulb, Menu, Moon, Search } from "lucide-react";

const TopNav = () => {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[var(--border-color)] px-5 py-3">
      <div className="flex h-10 w-full max-w-md items-center gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] px-3">
        <Search size={18} />

        <input
          className="w-full bg-transparent text-sm text-[var(--text-primary)] outline-none"
          type="text"
          placeholder="Search workspace..."
        />
      </div>

      <div className="flex items-center gap-2">
        <button type="button" aria-label="Theme">
          <Moon size={20} />
        </button>

        <button type="button" aria-label="Ideas">
          <Lightbulb size={20} />
        </button>

        <button type="button" aria-label="Notifications">
          <Bell size={20} />
        </button>

        <button type="button" aria-label="Menu">
          <Menu size={20} />
        </button>
      </div>
    </div>
  );
};

export default TopNav;