import { axiosAuth, axiosClassic } from "@/api/api.interceptor";
import { IUser } from "@/types/user.interface";

interface IUserService {
  searchTerm?: string;
  department?: string;
}

export const UserService = {
  async getAll(queryData = {} as IUserService) {
    const { data: users } = await axiosClassic.get<IUser[]>(`/users`, {
      params: queryData,
    });
    return users;
  },
};
