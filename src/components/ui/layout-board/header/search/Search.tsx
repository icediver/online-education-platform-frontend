import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="relative">
      <input
        className="w-64 rounded-lg bg-black/50 border border-black/70 text-xs focus-visible:outline-none px-10 py-2"
        placeholder="Search..."
        value={searchTerm}
        onKeyPress={(key) => {
          if (key.charCode === 13) setSearchTerm("");
        }}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FiSearch
        className={"absolute left-2 top-2  text-lg text-black-inactive"}
      />
    </div>
  );
}
