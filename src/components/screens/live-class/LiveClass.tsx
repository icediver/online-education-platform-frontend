"use client";

import Chat from "@/components/ui/chat/Chat";
import VideoPlayer from "@/components/ui/player/VideoPlayer";
import { VideoService } from "@/services/video.service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

interface ILiveClass {}
export default function LiveClass({}: ILiveClass) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const { data } = useQuery({
    queryKey: ["get videos"],
    queryFn: () => VideoService.getAll(),

    select: ({ data }) => data,
  });

  return (
    <div className="px-5 grid gap-5 grid-cols-7 animate-opacity">
      {data && (
        <>
          <VideoPlayer video={data[currentVideo]} />
          <Chat chatRoomId={data[currentVideo].conversation.id} />
        </>
      )}
    </div>
  );
}
