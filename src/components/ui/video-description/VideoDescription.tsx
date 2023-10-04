"use client";

interface IVideoDescription {}
export default function VideoDescription({}: IVideoDescription) {
  return (
    <div className="mt-10 text-[0.7rem]">
      <h1 className="text-base mb-2">
        The Business of illustration and Lettering
      </h1>
      <span className="text-gray-500 ">Chapter 5</span>
      <span> - Basic letter drawing</span>
      <div className="border-b border-gray-400/20 mt-5 "></div>
      <h1 className="my-2 headers-gradient text-xs">Overview</h1>
      <p className="text-gray-600 mb-5">
        Nurture yourself while you practice your drawing skills with two
        distinct and meditative techiques. One-line drawing is trendy. but it is
        way to break down shapes two distinct and meditative techniques.
        One-line while you practice your drawing skills with two ...
        <span className="text-xs text-white"> More</span>
      </p>
      <h1 className="pb-4 text-xs headers-gradient">Chapter topics</h1>
      <p className="text-gray-600 mb-2">
        <span className="text-xs text-white">01 </span>
        Moving Beyond Trials and Tribulations
      </p>
    </div>
  );
}
