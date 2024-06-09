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

export default function DescriptionTask({ task, index, edit } : ICardTask) {
  const { setTask } = useTask()

  const handleChange = (description: string) => {
    setTask({ description }, index)
  }
  return (
    <div className="flex gap-4 items-start text-md">
      <Image src="/icon/pen.png" alt="pen" width={20} height={20} className={task.description ? "" : "brightness-0"} />
      {edit
        ? <textarea
            className="w-full border border-primaryGrey p-2 rounded-md focus:outline-none placeholder:text-md"
            rows={2} placeholder="Type Description here" 
            onChange={e => handleChange(e.target.value)}
            defaultValue={task.description}
          />
        : <p>{task.description || "No Description"}</p>
      }
    </div>
  )
};
