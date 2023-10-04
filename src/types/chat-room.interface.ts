import { IMessage } from "./message.interface";

export interface IChatRoom {
  id: number;
  createdAt: string;
  updatedAt: string;
  messages: IMessage[];
}
