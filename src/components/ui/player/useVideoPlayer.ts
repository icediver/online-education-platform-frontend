import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface IVideoElement extends HTMLVideoElement {
  msRequestFullscreen?: () => void;
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
}

export const useVideoPlayer = () => {
  const videoRef = useRef<IVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [videoTime, setVideoTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const originalDuration = videoRef.current?.duration;
    if (originalDuration) setVideoTime(originalDuration);
  }, [videoRef.current?.duration]);

  const toggleVideo = useCallback(() => {
    if (!isPlaying) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  }, [isPlaying]);

  const forward = () => {
    if (videoRef.current) videoRef.current.currentTime += 5;
  };
  const backward = () => {
    if (videoRef.current) videoRef.current.currentTime -= 5;
  };

  const fullScreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const updateProgress = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / videoTime) * 100);
    };
    video.addEventListener("timeupdate", updateProgress);

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
    };
  }, [videoTime]);

  useEffect(() => {
    const video = videoRef.current;
    if (videoTime !== 0 && video?.currentTime === videoTime) {
      // setIsPlaying(false);
      // videoRef.current.load();
      // videoRef.current.currentTime === 0;
      video.play();
    }
  }, [videoRef.current?.currentTime]);
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (!isFocused) {
        switch (e.key) {
          case "ArrowRight":
            forward();
            break;
          case "ArrowLeft":
            backward();
            break;
          case " ":
            {
              e.preventDefault();
              toggleVideo();
            }
            break;
          case "f":
            fullScreen();
            break;
          default:
            return;
        }
      }
    };

    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [toggleVideo, isFocused]);

  return useMemo(
    () => ({
      videoRef,
      actions: {
        fullScreen,
        backward,
        forward,
        toggleVideo,
      },
      video: {
        isPlaying,
        currentTime,
        progress,
        videoTime,
        toggleVideo,
      },
      setIsFocused,
    }),
    [isPlaying, currentTime, progress, videoTime, toggleVideo, isFocused],
  );
};
