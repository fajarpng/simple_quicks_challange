import Image from "next/image";
import { useState } from "react";
import DateTask from "./date";
import DescriptionTask from "./description";
import TitleTask from "./title";
import dayjs from "dayjs";
import useTask from "../hooks/task";

type TTask = {
  title: string
  date?: Date | string
  description?: string
  done: boolean
}

interface ICardTask {
  task: TTask
  index: number
}

export default function CardTask({ task, index } : ICardTask) {
  const { setTask } = useTask()
  const [open, setOpen] = useState<boolean>(true)
  const [edit, setEdit] = useState<boolean>(!task.title)

  const calculateDaysLeft = (date: string | Date): string => {
    const today = dayjs();
    const targetDate = dayjs(date);
    const diff = targetDate.diff(today, 'day');
  
    if (diff < 0) {
      return 'Overdue';
    }
  
    return `${diff} days left`;
  }

  const handelDone = () => {
    setTask({ done: !task.done}, index)
  }

  return <div className="flex gap-4 text-start mt-4 border-b border-primaryDarkGrey">
    <div className="cursor-pointer" onClick={handelDone}>
      <Image
        src={task.done ? "/icon/check.png" : "/icon/uncheck.png"}
        alt="has done" width={20} height={20}
        className=" brightness-0"
      />
    </div>

      <div className="flex-1">
        <div className="flex gap-4 mb-4 justify-between">
          <TitleTask task={task} index={index} edit={edit} />

          <div className="flex gap-4 justify-between text-sm items-center">

            {edit && (
              <button onClick={() => setEdit(false)} className="text-lg text-primaryBlue font-semibold">save</button>
            )}

            {(!edit && !task.done && task.date) && <div className="flex-0 text-iRed">{calculateDaysLeft(task.date)}</div>}

            <button onClick={() => setOpen(prev => !prev)}>
              <Image
                src={open ? "/icon/down.png" : "/icon/up.png"}
                alt="has done" width={20} height={20}
              />
            </button>

            {!edit && (
              <>
                <button data-tooltip-target="tooltip-click" data-tooltip-trigger="click" >
                  <Image
                    src="/icon/dots.png"
                    alt="has done" width={20} height={20}
                    className=" brightness-0"
                  />
                </button>
              </>
            )}
          </div>

        </div>

        <div className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>

          <div className="overflow-hidden flex flex-col gap-4 mb-4">
            <DateTask task={task} index={index} edit={edit} />
            <DescriptionTask task={task} index={index} edit={edit} />
          </div>

        </div>
    </div>
  </div>
};
