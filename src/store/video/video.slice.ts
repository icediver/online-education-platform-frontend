import { IVideo } from "@/types/video.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IVideoInitialState } from "./video.types";

const initialState: IVideoInitialState = {
  video: {} as IVideo,
  isPause: true,
  isDisabledHotkey: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    togglePlay: (state) => {
      state.isPause = !state.isPause;
    },
    disableHotkey: (state, action: PayloadAction<boolean>) => {
      state.isDisabledHotkey = action.payload;
    },
    reset: (state) => {
      state = { ...initialState };
    },
  },
});
