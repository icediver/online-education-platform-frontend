import { HiPhone } from "react-icons/hi";
import { HiMiniVideoCamera } from "react-icons/hi2";
import { BiMicrophone, BiMicrophoneOff } from "react-icons/bi";
import { BsFullscreen } from "react-icons/bs";
import RemotePlayerButton from "./remote-player-button/RemotePlayerButton";
import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa";
interface IRemote {}
export default function Remote({}: IRemote) {
  const [isMicrophoneActive, setIsMicrophoneActive] = useState(false);
  return (
    <div className="absolute flex justify-center items-center bg-[#0A0A1F]/60 backdrop-blur-xl w-[350px] transition-all duration-300 border border-black-inactive/10 h-20 rounded-2xl -translate-x-1/2 -mt-10 left-1/2">
      <RemotePlayerButton>
        <BsFullscreen />
      </RemotePlayerButton>
      <RemotePlayerButton
        onClick={() => {
          setIsMicrophoneActive(!isMicrophoneActive);
        }}
        className="text-base"
      >
        {isMicrophoneActive ? <BiMicrophone /> : <BiMicrophoneOff />}
      </RemotePlayerButton>

      <button className="active:translate-y-1 flex justify-center items-center w-14 h-14 bg-red-800 rounded-full rotate-[135deg] mr-4">
        <HiPhone size={28} />
      </button>
      <RemotePlayerButton>
        <HiMiniVideoCamera />
      </RemotePlayerButton>
      <RemotePlayerButton>
        <FaLaptopCode />
      </RemotePlayerButton>
    </div>
  );
}
