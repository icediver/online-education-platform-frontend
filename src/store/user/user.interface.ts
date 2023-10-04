import { IUser } from "@/types/user.interface";

export interface IUserState extends IUser {
  // email: string;
  // isAdmin: boolean;
  // id: number;
  // avatarPath: string;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IInitialState {
  user: IUserState | null;
  isLoading: boolean;
}

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthResponse extends ITokens {
  user: IUser & {};
}
