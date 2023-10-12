import { useEffect, useRef } from "react";
import { useActions } from "./useActions";

export const useFocused = () => {
  const ref = useRef<HTMLTextAreaElement | HTMLInputElement>(null);
  const { setIsFocused } = useActions();

  useEffect(() => {
    ref.current?.addEventListener("focus", () => setIsFocused(true));
    ref.current?.addEventListener("blur", () => setIsFocused(false));
    return () => {
      ref.current?.removeEventListener("focus", () => setIsFocused(true));
      ref.current?.removeEventListener("blur", () => setIsFocused(false));
    };
  }, []);

  return ref;
};
