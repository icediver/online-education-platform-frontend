"use client";
import { useActions } from "@/hooks/useActions";
import { useTypedSelector } from "@/hooks/useTypedSelector";
interface IDashboard {}
export default function Dashboard({}: IDashboard) {
  const { getVideoById } = useActions();
  const { video } = useTypedSelector((state) => state.video);

  function clickHandler() {
    getVideoById(1);
  }
  return (
    <div className="text-center">
      <button onClick={clickHandler}>try</button>
    </div>
  );
}
