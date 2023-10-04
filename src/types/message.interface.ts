import { IUser } from "./user.interface";

export interface IMessage {
  id: number;
  createdAt: string;
  updatedAt: string;
  text?: string;
  image?: string;
  userFrom: IUser;
}

export interface ISendMessage
  extends Omit<IMessage, "createdAt" | "updatedAt" | "userFrom" | "id"> {}

export interface IMessageFields {
  text?: string;
  image?: string;
  conversationId: number;
  userFromId: number | undefined;
}

export interface IDeleteMessageFields
  extends Pick<IMessageFields, "conversationId"> {
  messageId: number;
}

export interface IChatRoom {
  id: number;
  messages: IMessage[];
}
