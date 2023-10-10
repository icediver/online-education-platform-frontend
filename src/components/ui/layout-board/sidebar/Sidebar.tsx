import { IconType } from "react-icons";

import { sidebarData } from "./sidebar.data";
import Link from "next/link";
import SidebarHeader from "./sidebar-header/SidebarHeader";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export interface ISidebar {
  title: string;
  path: string;
  Icon: IconType;
  notification?: number;
}
export default function Sidebar({ isSidebarOpen }: { isSidebarOpen: boolean }) {
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        "w-1/4 p-5 border-r border-black-inactive/20 transition-all duration-500",
        isSidebarOpen ? "" : "-ml-[368px]",
      )}
    >
      <SidebarHeader />
      <ul className=" py-6 text-gray-600 text-sm border-t border-black-inactive/20">
        {sidebarData.map((item) => (
          <li key={item.title} className="">
            <Link
              href={item.path}
              className={clsx(
                "px-6 flex py-2.5 rounded-2xl items-center justify-between",
                pathname === item.path ? "header-gradient   text-white" : "",
              )}
            >
              <div>
                <item.Icon className="inline-block mr-5" size={18} />
                <span className="capitalize">{item.title}</span>
              </div>
              {item.notification && (
                <div className="bg-red-600 h-4 w-4 text-white text-[0.7rem] flex items-center justify-center rounded-full">
                  {item.notification}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
