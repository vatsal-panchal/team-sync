import { Bell, Lightbulb, Menu, Moon, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { themeToggle } from "../../../../shared/state/themeSlice";

const iconBtn =
  "flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-[var(--text-secondary)] transition-colors hover:border-[var(--border-color)] hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)]";

const TopNav = () => {
  let dispatch = useDispatch();
  let { mode } = useSelector((store) => store.theme);

  const handleTheme = () => {
    dispatch(themeToggle());
  };

  return (
    <div className="flex h-16 items-center justify-between gap-4 px-5">
      <div className="flex h-10 w-full max-w-md items-center gap-3 rounded-lg border border-[var(--border-color)] bg-[var(--bg-card)] px-3 transition-colors hover:border-[var(--text-muted)] focus-within:border-[var(--primary)]">
        <Search size={16} className="shrink-0 text-[var(--text-muted)]" />

        <input
          className="w-full bg-transparent text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
          type="text"
          placeholder="Search workspace..."
        />
      </div>

      <div className="flex shrink-0 items-center gap-1">
        {mode === "dark" ? (
          <button type="button" aria-label="Theme" onClick={handleTheme} className={iconBtn}>
            <Moon size={18} />
          </button>
        ) : (
          <button type="button" aria-label="Ideas" onClick={handleTheme} className={iconBtn}>
            <Lightbulb size={18} />
          </button>
        )}

        <button type="button" aria-label="Notifications" className={iconBtn}>
          <Bell size={18} />
        </button>

        <button type="button" aria-label="Menu" className={iconBtn}>
          <Menu size={18} />
        </button>
      </div>
    </div>
  );
};

export default TopNav;