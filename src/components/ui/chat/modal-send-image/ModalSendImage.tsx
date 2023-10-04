import { ReactNode, useRef } from "react";
import ReactDOM from "react-dom";
import { RiCloseFill } from "react-icons/ri";
import { ModalLayout } from "../../modal-layout/ModalLayout";

interface IModalSendImage {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}
export default function ModalSendImage({
  children,
  isOpen,
  closeModal,
}: IModalSendImage) {
  const modalRef = useRef<HTMLElement | null>(document.getElementById("modal"));
  if (!isOpen || !modalRef.current) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalLayout isOpen={isOpen} onClose={closeModal}>
      <div
        className={
          "relative  w-1/2 h-80 bg-black left-1/2 -translate-x-1/2 rounded-2xl border-gray-400/30 border top-1/4 p-6"
        }
      >
        <button
          onClick={closeModal}
          className="fixed right-3 top-3 hover:text-red-500"
        >
          <RiCloseFill />
        </button>
        {children}
      </div>
    </ModalLayout>,
    modalRef.current,
  );
}
