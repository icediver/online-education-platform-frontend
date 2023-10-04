import clsx from "clsx";
import { ReactNode } from "react";
import { TbUsers, TbUsersMinus } from "react-icons/tb";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "../../button/Button";
import { FiSearch } from "react-icons/fi";
import Search from "./search/Search";

interface IHeader {
  children?: ReactNode;
  isSidebarOpen: boolean;
}

export default function Header({ children, isSidebarOpen }: IHeader) {
  return (
    <div
      className={clsx(
        "flex justify-between items-start w-full h-32 header-gradient rounded-tr-2xl pl-10 pr-5 py-5 animate-opacity",
        {
          ["rounded-tl-2xl"]: !isSidebarOpen,
        },
      )}
    >
      <div className="flex gap-10 mt-2">
        <div className="flex gap-2 items-center text-xs">
          <TbUsers />
          Invited to the class
          <div className="bg-gray-900/40 border inset-1 border-gray-900/70 w-5 h-5 rounded text-[0.6rem] flex justify-center items-center">
            52
          </div>
        </div>
        <div className="flex gap-2 items-center text-xs">
          <TbUsersMinus />
          Absent people
          <div className="bg-gray-900/40 border border-gray-900/70 w-5 h-5 rounded text-[0.6rem] flex justify-center items-center">
            52
          </div>
        </div>
      </div>
      <div className="flex gap-10">
        <Button>
          <AiOutlinePlus />
          Add People
        </Button>
        <Search />
      </div>
    </div>
  );
}
