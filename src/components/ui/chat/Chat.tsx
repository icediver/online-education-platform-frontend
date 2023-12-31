import styles from "./Chat.module.scss";
import clsx from "clsx";
import ChatHeader from "./chat-header/ChatHeader";
import ChatMessages from "./chat-messages/ChatMessages";
import { useChat } from "@/hooks/useChat";
import SendMessage from "./send-message/SendMessage";
import { Dispatch, SetStateAction, useState } from "react";

interface IChat {
  chatRoomId: string;
}

export default function Chat({ chatRoomId }: IChat) {
  const [activeButton, setActiveButton] = useState(0);

  const { chatRoom } = useChat(chatRoomId);

  return (
    <div className="relative col-span-2">
      <div
        className={clsx(
          "h-[660px] bg-[#0A0A1F] p-4   rounded-2xl -mt-12 border border-black-inactive/10 ",
        )}
      >
        <ChatHeader
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
        <div className={clsx("h-[580px] mt-4  overflow-auto", styles.chat)}>
          {activeButton === 0 && (
            <ChatMessages messages={chatRoom?.messages || []} />
          )}
          {activeButton === 1 && <div>Users</div>}
        </div>
      </div>
      <SendMessage chatRoomId={chatRoomId} />
    </div>
  );
}
