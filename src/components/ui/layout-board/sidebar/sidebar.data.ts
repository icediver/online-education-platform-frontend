import { ISidebar } from "./Sidebar";
import { RxDashboard } from "react-icons/rx";
import { FiBookOpen } from "react-icons/fi";
import { PiNotepadBold } from "react-icons/pi";
import { BiNotification, BiWebcam } from "react-icons/bi";
import { TfiPencilAlt } from "react-icons/tfi";
import { HiOutlineChatAlt, HiOutlineUsers } from "react-icons/hi";
import { LuFileCheck } from "react-icons/lu";

export const sidebarData: ISidebar[] = [
  {
    title: "dashboard",
    path: "/dashboard",
    Icon: RxDashboard,
  },
  {
    title: "courses",
    path: "/courses",
    Icon: FiBookOpen,
  },
  {
    title: "routine",
    path: "/routine",
    Icon: PiNotepadBold,
  },
  {
    title: "exam",
    path: "/exam",
    Icon: TfiPencilAlt,
  },
  {
    title: "results",
    path: "/results",
    Icon: LuFileCheck,
  },
  {
    title: "students",
    path: "/students",
    Icon: HiOutlineUsers,
  },
  {
    title: "message",
    path: "/message",
    Icon: HiOutlineChatAlt,
    notification: 2,
  },
  {
    title: "notice board",
    path: "/notice-board",
    Icon: BiNotification,
  },
  {
    title: "live class",
    path: "/live-class",
    Icon: BiWebcam,
  },
];
