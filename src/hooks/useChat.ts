import { DefaultEventsMap } from "@socket.io/component-emitter";
import { useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

import {
  IChatRoom,
  IDeleteMessageFields,
  IMessageFields,
} from "@/types/message.interface";

const SERVER_URL = "http://localhost:80";

export const useChat = (chatRoomId?: string | string[]) => {
  const [chatRoom, setChatRoom] = useState<IChatRoom>({} as IChatRoom);
  const [isConnected, setIsConnected] = useState(false);

  const [socket, setSocket] = useState<Socket<
    DefaultEventsMap,
    DefaultEventsMap
  > | null>(null);

  useEffect(() => {
    if (!chatRoomId) return;

    const newSocket = io(SERVER_URL, {
      query: { chatRoomId },
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [chatRoomId, setSocket]);

  useEffect(() => {
    if (!socket) return;

    socket.emit("message:get", { chatRoomId });

    socket.on("chatRoom", (chatRoom) => {
      setChatRoom(chatRoom);
    });

    socket.on("connect", () => {
      socket.emit("joinRoom", { chatRoomId });
    });

    socket.on("joinedRoom", (room) => {
      setIsConnected(true);
    });
    socket.on("leftRoom", (room) => {
      setIsConnected(false);
    });

    return () => {
      socket.on("connect", () => {
        socket.emit("leaveRoom", { chatRoomId });
      });
      socket.disconnect();
    };
  }, [chatRoomId, socket]);

  const sendMessage = (body: IMessageFields) => {
    socket?.emit("message:add", body);
  };

  const removeMessage = (body: IDeleteMessageFields) => {
    socket?.emit("message:delete", body);
  };

  return { chatRoom, sendMessage, removeMessage, isConnected };
};
