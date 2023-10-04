import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode;
    className?: string;
}
export default function Button({ children, className, ...rest }: IButton) {
    return (
        <button
            {...rest}
            className={clsx(
                "flex items-center gap-2 text-xs bg-black rounded-xl px-3 py-2 active:translate-y-1 transition-all",
                className,
            )}
        >
            {children}
        </button>
    );
}
