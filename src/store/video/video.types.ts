import { IVideo } from "@/types/video.interface";

export interface IVideoInitialState {
  video: IVideo;
  isLoading: boolean;
  isPause: boolean;
  isDisabledHotkey: boolean;
}
