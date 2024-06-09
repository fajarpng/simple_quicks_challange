"use client"
import Image from "next/image";
import ButtonChat from "./component/buttonChat";
import ButtonTask from "./component/buttonTask";
import PopUpChat from "./component/chat/popUp";
import useActionMenu from "./component/hooks/actionMenus";
import PopUpTask from "./component/task/popUp";

export default function Home() {
  const { action, setAction} = useActionMenu()

  const handelMenuVisibility = () => setAction(action !== "closed" ? "closed" : "open")
  const openChat = () => setAction("chat")
  const openTask = () => setAction("task")

  return (
    <main className="min-h-screen w-screen p-6 text-md font-sans">
      <div className="flex gap-6 items-end justify-end flex-col absolute end-6 bottom-6">

        <div className={action === "chat" ? "" : "hidden"}>
          <PopUpChat />
        </div>

        <div className={action === "task" ? "" : "hidden"}>
          <PopUpTask />
        </div>

        <div className=" flex gap-6 items-center">
          
          <div
            className={`group ${action === "closed" && "translate-x-40 opacity-0 invisible"} duration-300`}
            onClick={openTask}
          >
            <ButtonTask active={action === "task"} />
          </div>

          <div
            className={`group ${action === "closed" && "translate-x-20 opacity-0 invisible"} duration-200`}
            onClick={openChat}
          >
            <ButtonChat active={action === "chat"} />
          </div>

          <button className=" bg-primaryBlue w-[68px] aspect-square rounded-full z-10" onClick={handelMenuVisibility}>
            <Image src="/icon/light.png" alt="inbox" width={56} height={56} className=" m-auto" />
          </button>
          
        </div>
      </div>
    </main>
  );
}

const data = [
  {
    type: "group",
    name: "109220-Naturalization",
    sendder: "Cameron Phillips",
    date: "1-1-2021 19:10",
    chat: "Please check this out!",
  }
]