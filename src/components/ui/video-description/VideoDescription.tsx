"use client";

import { IVideo } from "@/types/video.interface";
import { useEffect, useState } from "react";
interface IVideoDescription extends Omit<IVideo, "source" | "conversation"> {}
export default function VideoDescription({
  chapterTopics,
  overview,
  title,
  chapter,
}: IVideoDescription) {
  const [isShowFullOverview, setIsShowFullOverview] = useState(false);
  const limit = 52;
  const [overviewText, setOverviewText] = useState("");

  useEffect(() => {
    if (!overview) return;

    if (!isShowFullOverview && overview.split(" ").length > limit) {
      const partOverview = overview.split(" ").splice(0, limit).join(" ");
      setOverviewText(partOverview);
    } else {
      setOverviewText(overview);
    }
  }, [isShowFullOverview]);

  function moreHandler() {
    setIsShowFullOverview(!isShowFullOverview);
  }
  return (
    <div className="mt-14 max-h-16 text-[0.7rem] z-0">
      <h1 className="text-base mb-2">{title}</h1>
      <span className="text-gray-500 ">{chapter.split("-")[0]}</span>
      <span> - {chapter.split("-")[1]}</span>
      <div className="border-b border-gray-400/20 mt-5 "></div>
      <h1 className="my-2 text-gradient text-xs">Overview</h1>
      <p className="text-gray-600 mb-5">
        {overviewText} {!isShowFullOverview && " ... "}
        <button className="text-xs text-white" onClick={moreHandler}>
          {!isShowFullOverview ? "  More" : " Hide"}
        </button>
      </p>
      <h1 className="pb-4 text-xs text-gradient">Chapter topics</h1>
      <p className="text-gray-600 mb-2">
        <span className="text-xs text-white">01 </span>
        Moving Beyond Trials and Tribulations
        <br />
        {chapterTopics}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="text-xs text-white">02 </span>
        Moving Beyond Trials and Tribulations
        <br />
        {chapterTopics}
      </p>
    </div>
  );
}
