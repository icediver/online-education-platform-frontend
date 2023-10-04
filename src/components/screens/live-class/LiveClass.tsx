"use client";

import Chat from "@/components/ui/chat/Chat";
import Player from "@/components/ui/player/Player";
import { useAuth } from "@/hooks/useAuth";

interface ILiveClass {}
export default function LiveClass({}: ILiveClass) {
  return (
    <div className="px-5 grid gap-5 grid-cols-5 animate-opacity">
      <Player />
      <Chat />
    </div>
  );
}
