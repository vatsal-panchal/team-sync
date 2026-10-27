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
    <div className="grid h-screen grid-rows-[auto_minmax(0,1fr)] overflow-hidden bg-[var(--bg-surface)] text-[var(--text-primary)] md:grid-cols-[250px_minmax(0,1fr)] md:grid-rows-1">
      <aside className="max-h-[45vh] overflow-y-auto border-b border-[var(--border-color)] md:max-h-none md:border-b-0 md:border-r">
        <AsideNav />
      </aside>

      <div className="flex min-h-0 flex-col overflow-y-auto bg-[var(--bg-main)]">
        <div className="sticky top-0 z-10">
          <TopNav />
        </div>

        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;