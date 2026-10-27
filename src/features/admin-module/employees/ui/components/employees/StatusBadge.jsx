const StatusBadge = ({ status }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
        status === "active"
          ? "border-[var(--success)]/25 bg-[var(--success)]/10 text-[var(--success)]"
          : "border-[var(--warning)]/25 bg-[var(--warning)]/10 text-[var(--warning)]"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />

      {status === "active" ? "Active" : "On Leave"}
    </span>
  );
};

export default StatusBadge;