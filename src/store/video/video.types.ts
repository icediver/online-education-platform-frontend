import { IVideo } from "@/types/video.interface";

export interface IVideoInitialState {
  video: IVideo;
  isPause: boolean;
  isDisabledHotkey: boolean;
}
