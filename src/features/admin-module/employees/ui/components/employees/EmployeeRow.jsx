import StatusBadge from "./StatusBadge";

const td = "px-5 py-3.5 text-sm text-[var(--text-secondary)]";

const EmployeeRow = ({ employee }) => {
  return (
    <tr className="border-t border-[var(--border-color)] transition-colors hover:bg-[var(--bg-hover)]">
      <td className={td}>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-sm font-medium uppercase text-[var(--text-primary)]">
            {employee.name?.[0]}
          </div>

          <div className="min-w-0">
            <p className="truncate font-medium text-[var(--text-primary)]">
              {employee.name}
            </p>
            <p className="truncate text-xs text-[var(--text-muted)]">
              {employee.email}
            </p>
          </div>
        </div>
      </td>

      <td className={`${td} capitalize`}>{employee.role}</td>

      <td className={`${td} capitalize`}>{employee.department}</td>

      <td className={td}>
        <StatusBadge status={employee.status} />
      </td>

      <td className={td}>
        {employee.createdAt
          ? new Date(employee.createdAt).toLocaleDateString("en-IN")
          : "—"}
      </td>

      <td className={`${td} text-[var(--text-muted)]`}>—</td>
    </tr>
  );
};

export default EmployeeRow;