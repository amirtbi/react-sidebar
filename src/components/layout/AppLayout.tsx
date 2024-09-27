import { Outlet } from "react-router";
import { Aside } from "../sidebar/sidebar-menu/SidebarMenuMain";

export const AppLayout = () => {
  return (
    <>
      <div className="app-layout">
        <Aside />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  );
};
