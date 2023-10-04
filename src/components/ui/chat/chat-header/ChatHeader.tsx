import { Dispatch, SetStateAction, useState } from "react";
import ChatButton from "../chat-button/ChatButton";
interface IChatHeader {
  activeButton: number;
  setActiveButton: Dispatch<SetStateAction<number>>;
}
export default function ChatHeader({
  activeButton,
  setActiveButton,
}: IChatHeader) {
  return (
    <div className="flex gap-4 flex-row justify-between">
      <ChatButton
        onClick={() => setActiveButton(0)}
        isActive={activeButton === 0}
      >
        Message
      </ChatButton>
      <ChatButton
        onClick={() => setActiveButton(1)}
        isActive={activeButton === 1}
      >
        Participants
      </ChatButton>
    </div>
  );
}
