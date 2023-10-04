import clsx from "clsx";
import { IButton } from "../../button/Button";
import { IoIosSend } from "react-icons/io";

export default function SendMessageButton({ className, ...rest }: IButton) {
  return (
    <button
      {...rest}
      className={clsx(
        "bg-gradient-to-r from-purple-700 to-orange-700 w-10 h-10 flex justify-center items-center rounded-full active:translate-y-1",
        className,
      )}
    >
      <IoIosSend size={22} />
    </button>
  );
}
