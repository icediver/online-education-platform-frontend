"use client";
import { useEffect, useRef } from "react";
import Message from "../message/Message";
import { IMessage } from "@/types/message.interface";
interface IChateMessages {
  messages: IMessage[];
}
export default function ChatMessages({ messages }: IChateMessages) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  return (
    <>
      {!!messages.length &&
        messages.map((message) => <Message key={message.id} {...message} />)}
      <div ref={messagesEndRef} />
    </>
  );
}
