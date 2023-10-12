import { axiosAuth } from "@/api/api.interceptor";
import { IUser } from "@/types/user.interface";

export const UserService = {
  async getAll(searchTerm: string) {
    const users = await axiosAuth.get<IUser[]>(
      `/users?SearchTerm=${searchTerm}`,
    );
    return users;
  },
};
