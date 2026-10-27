import { Bell, Lightbulb, Menu, Moon, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { themeToggle } from "../../../../shared/state/themeSlice";

const TopNav = () => {
  let dispatch = useDispatch();
  let { mode } = useSelector((store) => store.theme);


  const handleTheme = () => {
    dispatch(themeToggle());
  };

  return (
    <div className="flex items-center justify-between gap-4 border-b border-[var(--border-color)] px-5 py-3">
      <div className="flex h-10 w-full max-w-md items-center gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] px-3">
        <Search size={18} className="shrink-0 text-[var(--text-secondary)]" />

        <input
          className="w-full bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)]"
          type="text"
          placeholder="Search workspace..."
        />
      </div>

      <div className="flex shrink-0 items-center gap-2">
        {mode === "dark" ? (
          <button
            type="button"
            aria-label="Theme"
            onClick={handleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)]"
          >
            <Moon size={20} />
          </button>
        ) : (
          <button
            type="button"
            aria-label="Ideas"
            onClick={handleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)]"
          >
            <Lightbulb size={20} />
          </button>
        )}

        <button
          type="button"
          aria-label="Notifications"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)]"
        >
          <Bell size={20} />
        </button>

        <button
          type="button"
          aria-label="Menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)]"
        >
          <Menu size={20} />
        </button>
      </div>
    </div>
  );
};

export default TopNav;
