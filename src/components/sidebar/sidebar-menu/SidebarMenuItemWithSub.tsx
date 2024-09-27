import clsx from "clsx";
import { ReactNode } from "react";
import { checkIsActive } from "../../../utils/checkpath";
import { useLocation } from "react-router";
import { HiArrowCircleDown } from "react-icons/hi";
import { HiMiniPlus } from "react-icons/hi2";

type Props = {
  to: string;
  title: string;
  icon?: ReactNode;
  fontIcon?: string;
  hasBullet?: boolean;
  children?: ReactNode;
};
export const SidebarMenuWithSub = (props: Props) => {
  const { to, title, icon, children } = props;
  const { pathname } = useLocation();

  const isActive = checkIsActive(pathname, to);

  return (
    <>
      <div className={clsx("menu-item", { show: isActive }, "menu-accordion")}>
        <span className="menu-link">
          {icon && <span className="menu-icon">{icon}</span>}
          <span className="menu-title">{title}</span>
          <span className="menu-arrow">
            <HiMiniPlus />
          </span>
        </span>
        <div
          className={clsx("menu-sub menu-sub-accordion", {
            "menu-active-bg": isActive,
          })}
        >
          {children}
        </div>
      </div>
    </>
  );
};
