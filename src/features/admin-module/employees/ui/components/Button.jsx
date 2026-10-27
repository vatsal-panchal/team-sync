const Button = ({ children, icon, variant = "primary" }) => {
  const variants = {
    primary:
      "bg-[var(--tertiary)] text-[var(--bg-main)] hover:opacity-90",
    secondary:
      "border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--text-muted)] hover:bg-[var(--bg-hover)]",
  };

  return (
    <button
      className={`flex h-9 items-center gap-2 rounded-lg px-4 text-sm font-medium transition-all active:scale-[0.98] ${variants[variant]}`}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;