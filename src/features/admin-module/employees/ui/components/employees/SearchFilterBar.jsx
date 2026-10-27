import { Search, ChevronDown } from "lucide-react";

const field =
  "h-10 w-full appearance-none rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-sm text-[var(--text-primary)] outline-none transition-colors hover:border-[var(--text-muted)] focus:border-[var(--primary)]";

const chevron =
  "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]";

const SearchFilterBar = () => {
  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-[var(--border-color)] p-4">
      {/* SEARCH */}
      <div className="relative w-full min-w-[240px] flex-1 sm:max-w-sm">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-muted)]"
        />

        <input
          type="text"
          placeholder="Filter by name or keyword..."
          className={`${field} pl-9 pr-3 placeholder:text-[var(--text-muted)]`}
        />
      </div>

      {/* ROLE */}
      <div className="relative w-full sm:w-auto sm:min-w-[160px]">
        <select defaultValue="" className={`${field} pl-3 pr-9`}>
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="employee">Employee</option>
        </select>
        <ChevronDown size={16} className={chevron} />
      </div>

      {/* DEPARTMENT */}
      <div className="relative w-full sm:w-auto sm:min-w-[180px]">
        <select defaultValue="" className={`${field} pl-3 pr-9`}>
          <option value="">All Departments</option>
          <option value="developer">Developer</option>
          <option value="administrative">Administrative</option>
          <option value="security">Security</option>
          <option value="management">Management</option>
        </select>
        <ChevronDown size={16} className={chevron} />
      </div>

      {/* STATUS */}
      <div className="relative w-full sm:w-auto sm:min-w-[160px]">
        <select defaultValue="" className={`${field} pl-3 pr-9`}>
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <ChevronDown size={16} className={chevron} />
      </div>
    </div>
  );
};

export default SearchFilterBar;