import { IVideo } from "@/types/video.interface";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IVideoInitialState } from "./video.types";
import { getVideoById } from "./video.actions";

import * as videoExtraActions from "./video.actions";

const initialState: IVideoInitialState = {
  video: {} as IVideo,
  isLoading: true,
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
  extraReducers: (builder) => {
    builder
      .addCase(getVideoById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideoById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.video = { ...payload };
      })
      .addCase(getVideoById.rejected, (state) => {
        state.isLoading = false;
        state.video = {} as IVideo;
      });
  },
});

export const videoActions = { ...videoSlice.actions, ...videoExtraActions };
