import Image from "next/image";
import React from "react";

interface IContact {
  type: "group" | "single"
  name: string
  sendder?: string,
  date: string,
  chat: string,
}

const AvatarChat = ({data}: {data : IContact}) => {
  return <div className=" w-16">
    {data.type === "group"
    ? (
      <div className="m-auto bg-primaryBlue w-[34px] aspect-square rounded-full drop-shadow-grey flex items-center justify-center">
        <Image src="/icon/user.png" alt="profile" width={18} height={18} />
      </div>
    )
    : (
      <div className="m-auto text-white bg-primaryBlue w-[34px] aspect-square rounded-full flex items-center justify-center">
        <div>{(data.name).substring(0,1)}</div>
      </div>
    )}
  </div>
}

export default AvatarChat