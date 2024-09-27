import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { checkIsActive } from "../../../utils/checkpath";

type ISidebarMenuItem = {
  title: string;
  icon?: ReactNode;
  hasBullter?: boolean;
  children?: ReactNode;
  to: string;
};
export const SidebarMenuItem = (props: ISidebarMenuItem) => {
  const { title, icon, to, children } = props;
  const { pathname } = useLocation();
  const isActive = checkIsActive(pathname, to);
  return (
    <>
      <div className="menu-item">
        <NavLink
          className={clsx("menu-link without-sub", { active: isActive })}
          to={to}
          replace
        >
          {icon && <span className="menu-icon">{icon}</span>}
          <span className="menu-title">{title}</span>
        </NavLink>
      </div>
      {children}
    </>
  );
};
