import { axiosAuth } from "@/api/api.interceptor";

export const MediaService = {
  async upload(file: FormData) {
    return axiosAuth.post<{ url: string; name: string }>("/media", file, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};
