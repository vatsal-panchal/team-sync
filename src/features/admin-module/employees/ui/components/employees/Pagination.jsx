import { ChevronLeft, ChevronRight } from "lucide-react";

const btn =
  "flex h-9 min-w-9 items-center justify-center rounded-lg border px-2 text-sm font-medium transition-colors";
const idle =
  "border-[var(--border-color)] text-[var(--text-secondary)] hover:bg-[var(--bg-hover)] hover:text-[var(--text-primary)]";
const disabledCls =
  "cursor-not-allowed border-[var(--border-color)] text-[var(--text-muted)] opacity-40";

const Pagination = ({ pagination, onPageChange }) => {
  const { page, totalPages, total, limit } = pagination;

  const start = (page - 1) * limit + 1;
  const end = Math.min(page * limit, total);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-color)] bg-[var(--bg-surface)] px-5 py-3">
      {/* LEFT */}
      <p className="text-sm text-[var(--text-secondary)]">
        Showing{" "}
        <span className="font-medium text-[var(--text-primary)]">{start}</span>
        {" – "}
        <span className="font-medium text-[var(--text-primary)]">{end}</span>
        {" of "}
        <span className="font-medium text-[var(--text-primary)]">{total}</span>{" "}
        employees
      </p>

      {/* RIGHT */}
      <div className="flex items-center gap-1.5">
        {/* PREV */}
        <button
          aria-label="Previous page"
          disabled={page === 1}
          onClick={() => onPageChange(page - 1)}
          className={`${btn} ${page === 1 ? disabledCls : idle}`}
        >
          <ChevronLeft size={16} />
        </button>

        {/* PAGE NUMBERS */}
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;

          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={`${btn} ${
                page === pageNumber
                  ? "border-[var(--tertiary)] bg-[var(--tertiary)] text-[var(--bg-main)]"
                  : idle
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        {/* NEXT */}
        <button
          aria-label="Next page"
          disabled={page === totalPages}
          onClick={() => onPageChange(page + 1)}
          className={`${btn} ${page === totalPages ? disabledCls : idle}`}
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;