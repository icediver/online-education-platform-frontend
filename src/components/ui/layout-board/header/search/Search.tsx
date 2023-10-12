import { useActions } from "@/hooks/useActions";
import { useFocused } from "@/hooks/useFocused";
import { useSearchUsers } from "@/hooks/useSearchUsers";
import Image from "next/image";
import { RefObject, useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  const { searchTerm, setSearchTerm, users, handleSearch } = useSearchUsers();
  const ref = useFocused();
  return (
    <div className="relative">
      <input
        ref={ref as RefObject<HTMLInputElement>}
        className="w-64 rounded-lg bg-black/50 border-black/70 text-xs focus-visible:outline-none px-10 py-2"
        placeholder="Search..."
        value={searchTerm}
        onKeyPress={(key) => {
          if (key.charCode === 13) setSearchTerm("");
        }}
        onChange={handleSearch}
      />
      <FiSearch
        className={"absolute left-2 top-2  text-lg text-black-inactive"}
      />
      {!!users?.data.length && searchTerm !== "" && (
        <ul className="absolute bg-gray-700/20 backdrop-blur-xl z-50 w-full text-gray-300 rounded-lg text-xs p-4 mt-0.5 animate-opacity">
          {users.data.map((user) => (
            <li className="flex items-center gap-5 my-4" key={user.email}>
              <Image
                src={user.avatarPath}
                alt="avatar"
                width={38}
                height={38}
                className="rounded-full shadow-lg"
              />
              <span>{user.email}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
