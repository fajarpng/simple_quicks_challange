"use client"
import { useEffect, useState } from "react";
import useTask from "../hooks/task";
import CardTask from "./card";
import HeaderTask from "./header";
import Loading from "./loading";
import useActionMenu from "../hooks/actionMenus";

export default function PopUpTask() {
  const { action } = useActionMenu()
  const [isLoading, setLoading] = useState<boolean>(true)
  const { task } = useTask()

  // fake loading data
  useEffect(() => {
    const loadFakeData = async () => {
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 500)).then(() => setLoading(false));
    };

    action === "task" && loadFakeData();
  }, [ action ]);

  return (
    <div className="bg-white text-primaryDarkGrey overflow-y-auto p-4 h-screen w-screen max-h-[637px] max-w-[634px]">
      <HeaderTask />

      {isLoading
      ? <Loading />
      :(
        <div className="">
          {task.map((v,i) => <CardTask key={i} index={i} task={v} />)}
        </div>
      )}
    </div>
  )
}