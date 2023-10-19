import Button from "@/components/ui/button/Button";
import { AiOutlinePlus } from "react-icons/ai";
import { TbUsers, TbUsersMinus } from "react-icons/tb";
import Search from "../search/Search";
import { Fragment } from "react";

interface IHeaderLiveClass {}
export default function HeaderLiveClass({}: IHeaderLiveClass) {
  return (
    <div className={"grid grid-cols-7 gap-5  w-full"}>
      <div className="gap-10 mt-2 col-span-4 flex items-center">
        <div className="flex gap-2 items-center text-xs">
          <TbUsers />
          <span>Invited to the class</span>
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
      <Button>
        <AiOutlinePlus />
        Add People
      </Button>
      <Search className="col-span-2" />
    </div>
  );
}
