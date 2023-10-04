import { axiosAuth } from "@/api/api.interceptor";
import { IMessage, ISendMessage } from "@/types/message.interface";

export const MessageService = {
  async postMessage(data: FormData) {
    const message = await axiosAuth.post<IMessage>(`/message`, data);
    return message;
  },
};
