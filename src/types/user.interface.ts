export interface IUser {
  id: number;
  email: string;
  name: string;
  avatarPath: string;
  phone: string;
  isAdmin: boolean;
  position: string;
  year?: number;
  semester?: number;
  department?: number;
}

export interface IUserFields extends IUser {
  birthDate: string;
  city: string;
  gender: "male" | "female";
}
