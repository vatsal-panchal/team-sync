import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import AsideNav from "../../features/dashboard/ui/components/AsideNav";
import TopNav from "../../features/dashboard/ui/components/TopNav";

const DashBoardLayout = () => {
  let { mode } = useSelector((store) => store.theme);

  useEffect(() => {
    document.body.classList.toggle("light", mode === "light");
  }, [mode]);

  return (
    <div className="fixed inset-0 grid grid-rows-[auto_minmax(0,1fr)] overflow-hidden bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors duration-300 md:grid-cols-[260px_minmax(0,1fr)] md:grid-rows-1">
      {/* Sidebar */}
      <aside className="max-h-[45vh] overflow-y-auto border-b border-[var(--border-color)] bg-[var(--bg-card)] md:max-h-none md:border-b-0 md:border-r">
        <AsideNav />
      </aside>

      {/* Main dashboard */}
      <div className="flex min-h-0 flex-col bg-[var(--bg-main)]">
        {/* Top navigation (fixed, scroll nahi hoga) */}
        <div className="shrink-0 border-b border-[var(--border-color)] bg-[var(--bg-main)]">
          <TopNav />
        </div>

        {/* Sirf ye hissa scroll hoga */}
        <main className="relative min-h-0 min-w-0 flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-[1600px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;