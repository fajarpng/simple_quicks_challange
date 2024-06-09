import dayjs from "dayjs";
import Image from "next/image";
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
  edit: boolean
}

export default function DateTask({ task, index, edit } : ICardTask) {
  const { setTask } = useTask()

  const handleChange = (date: string | Date) => {
    setTask({ date }, index)
  }

  return (
    <div className="flex gap-4 items-center text-md">
      <Image src="/icon/clock.png" alt="clock" width={20} height={20} className={task.date ? "" : "brightness-0"} />
      
      {edit
        ? <input defaultValue={task.date as string} type="date" className="border border-primaryGrey px-2 py-1 rounded-md focus:outline-none placeholder:text-md" onChange={e => handleChange(e.target.value)} />
        : <div>{task.date ? dayjs(task.date).format("DD/MM/YY") : "No Limit"}</div>
      }
    </div>
  )
};
