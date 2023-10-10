"use client";

import { useEffect, useState } from "react";
const overview =
  "Nurture yourself while you practice your drawing skills with two distinct and meditative techiques. One-line drawing is trendy. but it is way to break down shapes two distinct and meditative techniques. One - line while you practice your drawing skills with two Nurture yourself while you practice your drawing skills with two distinct and meditative techiques. One-line drawing is trendy. but it is way to break down shapes two distinct and meditative techniques. One - line while you practice your drawing skills with two Nurture yourself while you practice your drawing skills with two distinct and meditative techiques. One-line drawing is trendy. but it is way to break down shapes two distinct and meditative techniques. One - line while you practice your drawing skills with two";

interface IVideoDescription {}
export default function VideoDescription({}: IVideoDescription) {
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
    <div className="mt-14 max-h-16 text-[0.7rem]">
      <h1 className="text-base mb-2">
        The Business of illustration and Lettering
      </h1>
      <span className="text-gray-500 ">Chapter 5</span>
      <span> - Basic letter drawing</span>
      <div className="border-b border-gray-400/20 mt-5 "></div>
      <h1 className="my-2 headers-gradient text-xs">Overview</h1>
      <p className="text-gray-600 mb-5">
        {overviewText} {!isShowFullOverview && " ... "}
        <button className="text-xs text-white" onClick={moreHandler}>
          {!isShowFullOverview ? "  More" : " Hide"}
        </button>
      </p>
      <h1 className="pb-4 text-xs headers-gradient">Chapter topics</h1>
      <p className="text-gray-600 mb-2">
        <span className="text-xs text-white">01 </span>
        Moving Beyond Trials and Tribulations
        <br />
        {overview + overview + overview}
      </p>
      <p className="text-gray-600 mb-2">
        <span className="text-xs text-white">02 </span>
        Moving Beyond Trials and Tribulations
        <br />
        {overview + overview + overview}
      </p>
    </div>
  );
}
