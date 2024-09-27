import { SidebarMenuItem } from "./SidebarMenuItem";
import { HiHome, HiListBullet, HiPaperAirplane, HiUser } from "react-icons/hi2";
import { SidebarMenuWithSub } from "./SidebarMenuItemWithSub";
export const Sidebar = () => {
  return (
    <>
      <SidebarMenuItem to="/dashboard" title="Dashboard" icon={<HiHome />} />
      <SidebarMenuWithSub to="/admin" icon={<HiUser />} title="Admin">
        <SidebarMenuWithSub to="/admin/user" title="user">
          <SidebarMenuItem to="/admin/user" title="user" icon={<HiHome />} />
        </SidebarMenuWithSub>
        <SidebarMenuWithSub to="/admin/panel" title="panel">
          <SidebarMenuItem to="/admin/panel" title="panel" icon={<HiHome />} />
        </SidebarMenuWithSub>
      </SidebarMenuWithSub>
      <SidebarMenuWithSub to="/reports" title="Panel" icon={<HiListBullet />}>
        <SidebarMenuItem
          to="/reports"
          title="Reports"
          icon={<HiListBullet />}
        />
        <SidebarMenuWithSub title="Logs" to="/reports">
          <SidebarMenuItem
            to="/reports/admin"
            title="Reports"
            icon={<HiHome />}
          />
          <SidebarMenuItem
            to="/reports/auth"
            title="Reports"
            icon={<HiHome />}
          />
        </SidebarMenuWithSub>
      </SidebarMenuWithSub>
    </>
  );
};
