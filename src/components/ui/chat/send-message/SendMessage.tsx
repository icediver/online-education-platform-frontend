import { useOutside } from "@/hooks/useOutside";
import { FaFaceSmile } from "react-icons/fa6";
import UploadFile from "../send-message-button/upload-file/UploadFile";
import clsx from "clsx";
import SendMessageButton from "../send-message-button/SendMessageButton";
import EmojiPicker, { Theme } from "emoji-picker-react";
import styles from "./SendMessage.module.scss";
import {
  Dispatch,
  MouseEventHandler,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAuth } from "@/hooks/useAuth";
import { useChat } from "@/hooks/useChat";
import { useUpload } from "../useUpload";
import { useFocused } from "@/hooks/useFocused";

interface ISendMessageForm {
  isFilePicker?: boolean;
  selectedFile?: File;
  setIsModalOpen?: Dispatch<SetStateAction<boolean>>;
  chatRoomId: string;
}
export default function SendMessage({
  isFilePicker = true,
  selectedFile,
  setIsModalOpen,
  chatRoomId,
}: ISendMessageForm) {
  const [messageText, setMessageText] = useState("");
  const { user } = useAuth();
  const { uploadFile, fileUrl } = useUpload();
  const { sendMessage } = useChat(chatRoomId);
  // const ref = useRef<HTMLTextAreaElement>(null);
  const { ref: refOutside, isShow, setIsShow } = useOutside(false);
  const ref = useFocused();

  const send: MouseEventHandler<HTMLButtonElement> = async () => {
    const selectedImage = selectedFile ? await uploadFile(selectedFile) : "";
    if (messageText !== "" || selectedImage !== "") {
      const message = {
        conversationId: chatRoomId,
        text: messageText,
        image: selectedImage,
        userFromId: user?.id,
      };
      sendMessage(message);
      setMessageText("");
    }
    if (setIsModalOpen) setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-[#0A0A1F] p-4 flex  justify-between items-center  border border-black-inactive/10 h-[3.5rem] rounded-2xl mt-5">
        <div className="text-black-inactive w-12">
          <button
            type="button"
            className="mr-2"
            onClick={() => setIsShow(!isShow)}
          >
            <FaFaceSmile />
          </button>
          {isFilePicker && <UploadFile chatRoomId={chatRoomId} />}
        </div>
        <textarea
          ref={ref as RefObject<HTMLTextAreaElement>}
          className={clsx(
            "bg-[#0A0A1F] h-8 border-none focus-visible:outline-none resize-none w-44",
            styles.message,
          )}
          value={messageText}
          onChange={(e) => {
            setMessageText(e.target.value);
          }}
        />

        <SendMessageButton type="button" onClick={send} />
      </div>
      {isShow && (
        <div className={"animate-opacity"} ref={refOutside}>
          <EmojiPicker
            theme={Theme.DARK}
            width={300}
            height={400}
            onEmojiClick={(e) => {
              setMessageText(ref.current?.value + e.emoji);
              setIsShow(!isShow);
            }}
          />
        </div>
      )}
    </>
  );
}
