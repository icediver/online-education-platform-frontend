import { BiMicrophone, BiMicrophoneOff } from "react-icons/bi";
import RemotePlayerButton from "./remote-player-button/RemotePlayerButton";
import { useState } from "react";
import { FaForward, FaPause, FaPlay } from "react-icons/fa";
import { MdFullscreen, MdHistory } from "react-icons/md";
import { FaBackward } from "react-icons/fa6";
interface IRemote {
  isPlaying: boolean;
  actions: {
    fullScreen: () => void;
    backward: () => void;
    forward: () => void;
    toggleVideo: () => void;
  };
}
export default function Remote({
  isPlaying,
  actions: { fullScreen, backward, forward, toggleVideo },
}: IRemote) {
  const [isMicrophoneActive, setIsMicrophoneActive] = useState(false);
  return (
    <div className="absolute flex justify-center items-center bg-[#0A0A1F]/60 backdrop-blur-xl w-[350px] transition-all duration-300 border border-black-inactive/10 h-20 rounded-2xl -translate-x-1/2 -mt-10 left-1/2 -translate-y-1/2">
      <RemotePlayerButton onClick={fullScreen}>
        <MdFullscreen size={20} />
      </RemotePlayerButton>
      <RemotePlayerButton onClick={backward}>
        <FaBackward />
      </RemotePlayerButton>

      <button
        className="active:translate-y-1 flex justify-center items-center w-14 h-14 bg-red-800 hover:bg-red-900 rounded-full  mr-4 shadow-inner "
        onClick={toggleVideo}
      >
        {!isPlaying ? (
          <FaPlay size={24} className={"ml-1"} />
        ) : (
          <FaPause size={24} />
        )}
      </button>
      <RemotePlayerButton onClick={forward}>
        <FaForward className={"ml-1"} />
      </RemotePlayerButton>
      <RemotePlayerButton
        onClick={() => {
          setIsMicrophoneActive(!isMicrophoneActive);
        }}
        className="text-base"
      >
        {isMicrophoneActive ? <BiMicrophone /> : <BiMicrophoneOff />}
      </RemotePlayerButton>
    </div>
  );
}
