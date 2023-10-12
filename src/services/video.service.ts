import { axiosAuth } from "@/api/api.interceptor";
import { IMessage, ISendMessage } from "@/types/message.interface";
import { IVideo } from "@/types/video.interface";

export const VideoService = {
  async getAll() {
    const videos = await axiosAuth.get<IVideo[]>(`/videos`);
    return videos;
  },
};
