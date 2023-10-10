"use client";

import Chat from "@/components/ui/chat/Chat";
import VideoPlayer from "@/components/ui/player/VideoPlayer";
import { useState } from "react";

interface ILiveClass {}
export default function LiveClass({}: ILiveClass) {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="px-5 grid gap-5 grid-cols-12 animate-opacity">
      <VideoPlayer
        videoSource={"/uploads/media/video/video.mp4"}
        isFocused={isFocused}
      />
      <Chat setIsFocused={setIsFocused} />
    </div>
  );
}
