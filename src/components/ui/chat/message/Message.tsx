import { useAuth } from "@/hooks/useAuth";
import { IMessage } from "@/types/message.interface";
import { IUser } from "@/types/user.interface";
import timeSince from "@/utils/time-since";
import clsx from "clsx";
import Image from "next/image";

export default function Message({
  text,
  image,
  userFrom,
  createdAt,
}: IMessage) {
  const { user: currentUser } = useAuth();
  if (text === "" && image === "") return null;
  const isMessageFromCurrentUser = userFrom?.id === currentUser?.id;
  const leftOrRight = isMessageFromCurrentUser
    ? "items-end justify-end"
    : "items-start justify-start";

  return (
    <div
      className={clsx(
        "flex gap-2 flex-row w-fullanimate-opacity mt-4",
        isMessageFromCurrentUser
          ? "items-end justify-end"
          : "items-start justify-start",
      )}
    >
      {!isMessageFromCurrentUser && (
        <div className="w-8 h-8">
          <Image
            src={userFrom?.avatarPath || "/uploads/avatars/batman.jpg"}
            alt="avatar"
            width={30}
            height={30}
            className="rounded-full"
          />
        </div>
      )}
      <div className={clsx("flex flex-col  w-4/5", leftOrRight)}>
        {text !== "" && (
          <>
            <div
              className={clsx(
                "text-[0.7rem] w-full py-3 px-2  rounded-xl",
                isMessageFromCurrentUser
                  ? "bg-gradient-to-r from-violet-600 to-orange-600"
                  : "bg-black border border-gray-400/20",
              )}
            >
              {text}

              <div className="text-white/30 mt-1 text-[0.7rem]">
                {timeSince(createdAt)}
              </div>
            </div>
          </>
        )}
        {image && image !== "" && (
          <>
            <Image
              src={image}
              alt="image"
              width={150}
              height={100}
              className={"my-1 rounded-xl"}
            />
            <div className="text-white/30 mt-1 text-[0.7rem]">
              {timeSince(createdAt)}
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
}
