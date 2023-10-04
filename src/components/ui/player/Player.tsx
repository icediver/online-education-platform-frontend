import Image from "next/image";
import Remote from "./remote/Remote";
import VideoDescription from "../video-description/VideoDescription";

interface IPlayer {}
export default function Player({}: IPlayer) {
  return (
    <div className="relative col-span-8 flex flex-col justify-between">
      <div>
        <div className="relative aspect-4/3 bg-primary rounded-2xl -mt-12 overflow-hidden ">
          <div className="absolute player top-0 left-0 right-0 bottom-0  opacity-70"></div>
          <Image
            src={"/images/woomen.jpg"}
            alt="player"
            width={800}
            height={600}
          />
        </div>
        <Remote />
      </div>
      <VideoDescription />
    </div>
  );
}
