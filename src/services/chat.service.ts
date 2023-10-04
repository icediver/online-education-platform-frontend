import { axiosAuth } from "@/api/api.interceptor";
import { IChatRoom } from "@/types/chat-room.interface";

export const ChatService = {
  async getChat(chatId: number) {
    const chatRoom = await axiosAuth.get<IChatRoom>(`/conversation/${chatId}`);
    return chatRoom;
  },
};
