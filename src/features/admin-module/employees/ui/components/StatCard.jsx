const StatCard = ({ title, value, icon, badge }) => {
  return (
    <div className="rounded-xl border border-[var(--border-color)] bg-[var(--bg-surface)] p-5 transition-colors hover:border-[var(--text-muted)]">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border-color)] bg-[var(--bg-main)] text-[var(--tertiary)] [&>svg]:h-[18px] [&>svg]:w-[18px]">
          {icon}
        </div>

        <span className="rounded-full border border-[var(--border-color)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-secondary)]">
          {badge}
        </span>
      </div>

      <div className="mt-5">
        <p className="text-sm text-[var(--text-secondary)]">{title}</p>

        <h2 className="mt-1 text-3xl font-semibold tracking-tight tabular-nums text-[var(--text-primary)]">
          {value}
        </h2>
      </div>
    </div>
  );
};

export default StatCard;