"use client";
import { ReactNode, useState } from "react";

import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import SidebarOpenButton from "./sidebar-open-button/SidebarOpenButton";
import clsx from "clsx";

interface ILayoutBoard {
  children: ReactNode;
}
export default function LayoutBoard({ children }: ILayoutBoard) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <main className="h-screen w-[1472px]  mx-auto py-16 overflow-hidden">
      <div className="relative h-[calc(100vh_-_8rem)] rounded-3xl bg-black flex ">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div
          className={clsx(
            "py-2 pr-2 w-full animate-opacity",
            isSidebarOpen ? "" : "pl-2",
          )}
        >
          <Header isSidebarOpen={isSidebarOpen} />
          {children}
        </div>
        <SidebarOpenButton
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>
    </main>
  );
}
