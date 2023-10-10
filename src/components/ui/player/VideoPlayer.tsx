import { FC, useEffect } from "react";

import { useVideoPlayer } from "./useVideoPlayer";
import VideoDescription from "../video-description/VideoDescription";
import Remote from "./remote/Remote";

const VideoPlayer: FC<{ videoSource: string; isFocused: boolean }> = ({
  videoSource,
  isFocused,
}) => {
  const { actions, video, videoRef, setIsFocused } = useVideoPlayer();

  useEffect(() => {
    setIsFocused(isFocused);
  }, [isFocused]);

  return (
    <div className="col-span-8 h-[740px] -translate-y-12 overflow-auto scrolbar-hidden rounded-t-2xl">
      <div
        className={
          "rounded-2xl overflow-hidden shadow-xl relative animate-opacity mb-10 aspect-video  bg-[#0B091F]"
        }
      >
        <>
          <video ref={videoRef} src={`${videoSource}#t=0`} preload="metadata" />

          <div
            className={
              "absolute left-0 right-0 bottom-0.5 flex items-center pl-1 pr-3"
            }
          >
            <div className={"bg-gray-600 flex  h-1.5 w-full"}>
              <div
                style={{ width: `${video.progress}%` }}
                className={"rounded-2xl h-full bg-white/90"}
              />
            </div>
            <div
              className={
                "flex items-center text-white ml-4 w-28 justify-center text-[0.7rem] border rounded opacity-60"
              }
            >
              <p>
                {Math.floor(video.currentTime / 60) +
                  ":" +
                  ("0" + Math.floor(video.currentTime % 60)).slice(-2)}
              </p>
              <p className="mx-2"> / </p>
              <p>
                {Math.floor(video.videoTime / 60) +
                  ":" +
                  ("0" + Math.floor(video.videoTime % 60)).slice(-2)}
              </p>
            </div>
          </div>
        </>
      </div>
      <Remote isPlaying={video.isPlaying} actions={actions} />
      <VideoDescription />
    </div>
  );
};

export default VideoPlayer;
