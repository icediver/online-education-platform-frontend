import { useEffect, useRef } from "react";
import { useActions } from "./useActions";

export const useFocused = () => {
  const ref = useRef<HTMLTextAreaElement | HTMLInputElement>(null);
  const { disableHotkey } = useActions();

  useEffect(() => {
    ref.current?.addEventListener("focus", () => disableHotkey(true));
    ref.current?.addEventListener("blur", () => disableHotkey(false));
    return () => {
      ref.current?.removeEventListener("focus", () => disableHotkey(true));
      ref.current?.removeEventListener("blur", () => disableHotkey(false));
    };
  }, []);

  return ref;
};
