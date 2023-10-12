import { UserService } from "@/services/user.service";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";
import { useDebounce } from "./useDebounce";

export const useSearchUsers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 500);
  const { data } = useQuery({
    enabled: !!debouncedSearch,
    queryKey: ["search users", debouncedSearch],
    queryFn: async () => {
      const users = await UserService.getAll(debouncedSearch);
      return users;
    },
    onSuccess: ({ data }) => {
      return data;
    },
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return { searchTerm, setSearchTerm, users: data, handleSearch };
};
