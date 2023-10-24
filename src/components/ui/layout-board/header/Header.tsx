import clsx from "clsx";
import { ReactNode } from "react";
import { TbUsers, TbUsersMinus } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../../button/Button";
import Search from "./search/Search";
import { usePathname, useRouter } from "next/navigation";
import HeaderLiveClass from "./header-live-class/HeaderLiveClass";
import HeaderExam from "./header-exam/HeaderExam";
import HeaderStudents from "./header-students/HeaderStudents";

interface IHeader {
  children?: ReactNode;
  isSidebarOpen: boolean;
}

export default function Header({ children, isSidebarOpen }: IHeader) {
  const path = usePathname();
  return (
    <div
      className={clsx(
        "flex justify-between items-start w-full h-32 header-gradient rounded-tr-2xl pl-8 pr-5 py-5 animate-opacity",
        {
          ["rounded-tl-2xl"]: !isSidebarOpen,
        },
      )}
    >
      {path === "/live-class" && <HeaderLiveClass />}
      {path === "/exam" && <HeaderExam />}
      {path === "/students" && <HeaderStudents />}
    </div>
  );
}
