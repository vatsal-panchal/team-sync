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
    <div className="grid h-screen grid-rows-[auto_minmax(0,1fr)] overflow-hidden bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors duration-300 md:grid-cols-[260px_minmax(0,1fr)] md:grid-rows-1">
      {/* Sidebar */}
      <aside className="max-h-[45vh] overflow-y-auto border-b border-[var(--border-color)] bg-[var(--bg-card)] md:max-h-none md:border-b-0 md:border-r">
        <AsideNav />
      </aside>

      {/* Main dashboard */}
      <div className="flex min-h-0 flex-col overflow-y-auto bg-[var(--bg-main)]">
        <div className="sticky top-0 z-20 border-b border-[var(--border-color)] bg-[var(--bg-main)]">
          <TopNav />
        </div>

        <main className="relative min-w-0 flex-1 p-4 md:p-6 lg:p-8">
          <div className="mx-auto w-full max-w-[1600px]">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;