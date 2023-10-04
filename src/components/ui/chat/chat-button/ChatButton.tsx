import clsx from "clsx";
import { IButton } from "../../button/Button";

interface IChatButton extends IButton {
    isActive: boolean;
}

export default function ChatButton({
    children,
    className,
    isActive,
    ...rest
}: IChatButton) {
    return (
        <button
            {...rest}
            className={clsx(
                "w-full rounded-lg py-2 active:translate-y-1 transition-all text-black-inactive",
                className,
                {
                    ["bg-gradient-to-r from-purple-700 to-orange-700 text-white"]:
                        isActive,
                    ["border border-black-inactive/30"]: !isActive,
                },
            )}
        >
            {children}
        </button>
    );
}
