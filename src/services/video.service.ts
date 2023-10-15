import { axiosAuth } from "@/api/api.interceptor";
import { IVideo, TypeVideoUpdate } from "@/types/video.interface";

export const VideoService = {
  async getAll() {
    const videos = await axiosAuth.get<IVideo[]>(`/videos`);
    return videos;
  },

  async getById(videoId: number) {
    const { data: video } = await axiosAuth.get<IVideo>(`/videos/${videoId}`);
    return video;
  },

  async create() {
    const { data } = await axiosAuth.post<IVideo>(`/videos`);
    return data;
  },

  async update(videoId: number, data: TypeVideoUpdate) {
    const { data: video } = await axiosAuth.put<IVideo>(
      `/videos/${videoId}`,
      data,
    );
    return video;
  },
};
