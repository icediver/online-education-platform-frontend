import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface IRemotePlayerButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  // HandlerButton?: () => void;
}
export default function RemotePlayerButton({
  children,
  className,
  ...rest
}: IRemotePlayerButton) {
  return (
    <button
      {...rest}
      className={clsx(
        "rounded-full w-8 h-8 bg-black flex justify-center items-center text-xs mr-4 text-gray-500 hover:text-white active:translate-y-1 transition-transform",
        className,
      )}
    >
      {children}
    </button>
  );
}
