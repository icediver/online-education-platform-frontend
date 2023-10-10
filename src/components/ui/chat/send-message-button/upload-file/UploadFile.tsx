import { FiPaperclip } from "react-icons/fi";
import ModalSendImage from "../../modal-send-image/ModalSendImage";
import { Dispatch, SetStateAction, useRef } from "react";
import { usePreview } from "@/hooks/usePreview";
import SendMessage from "../../send-message/SendMessage";

interface IUploadFile {
  setIsFocused: Dispatch<SetStateAction<boolean>>;
}

export default function UploadFile({ setIsFocused }: IUploadFile) {
  const ref = useRef<HTMLInputElement>(null);

  const { onSelectFile, isModalOpen, preview, selectedFile, setIsModalOpen } =
    usePreview();

  return (
    <>
      <label className="inline-block">
        <FiPaperclip className="cursor-pointer" />
        <input
          ref={ref}
          type="file"
          className="hidden"
          onChange={onSelectFile}
        />
      </label>
      <ModalSendImage
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      >
        <div className="mx-auto h-2/3 aspect-video rounded-xl overflow-hidden">
          {selectedFile && <img src={preview} />}
        </div>
        <div className="mt-1 mb-1 ml-4 text-xs text-gray-600">Add Message:</div>
        <SendMessage
          setIsFocused={setIsFocused}
          isFilePicker={false}
          selectedFile={selectedFile || undefined}
          setIsModalOpen={setIsModalOpen}
        />
      </ModalSendImage>
    </>
  );
}
