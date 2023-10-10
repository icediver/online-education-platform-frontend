import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { IButton } from "../../button/Button";
import { CgMenuRight } from "react-icons/cg";

export interface ISidebarOpenButton extends IButton {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function SidebarOpenButton({
  children,
  className,
  isSidebarOpen,
  setIsSidebarOpen,
  ...rest
}: ISidebarOpenButton) {
  return (
    <button
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      {...rest}
      className={clsx(
        "absolute top-5 transition-all duration-500 text-black-inactive/50 hover:text-black-inactive",
        {
          ["left-64"]: isSidebarOpen,
          ["left-5"]: !isSidebarOpen,
        },
        className,
      )}
    >
      <CgMenuRight size={22} />
    </button>
  );
}
