import { VideoService } from "@/services/video.service";
import { IVideo } from "@/types/video.interface";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getVideoById = createAsyncThunk<IVideo, number>(
  "videos/by-id",
  async (videoId, thunkApi) => {
    try {
      const response = await VideoService.getById(videoId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  },
);
