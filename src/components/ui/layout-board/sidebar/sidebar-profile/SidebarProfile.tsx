"use client";

import Image from "next/image";
import Hexagon from "../hexagon/Hexagon";
import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

interface ISidebarProfile {}
export default function SidebarProfile({}: ISidebarProfile) {
  const { user } = useAuth();
  return (
    <>
      <Link
        href={!user ? "/auth" : "profile"}
        className="relative block w-32 h-32 rounded-full  mb-5 mt-10  mx-auto overflow-hidden"
      >
        <Image
          src={user?.avatarPath || "/uploads/avatars/batman.jpg"}
          alt=""
          width={128}
          height={128}
          className=""
        />
        <Hexagon className="absolute -left-[57px]  -top-[60px] rotate-90 blur-[1px] stroke-rose-700" />
      </Link>
      <div className="text-center">{user?.name || "No Authorized User"}</div>
      <div className="mb-5 text-center text-gray-600 text-xs">
        {user?.position}
      </div>
    </>
  );
}
