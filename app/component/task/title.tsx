import useTask from "../hooks/task"

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

export default function TitleTask({ task, index, edit } : ICardTask) {
  const { setTask } = useTask()

  const handleChange = (title: string) => {
    setTask({ title }, index)
  }

  return (
    <div className="w-full flex-1">
      {edit
        ? <input
            className="w-full border border-primaryGrey p-2 rounded-md focus:outline-none placeholder:text-md"
            placeholder="Type title here.."
            onChange={e => handleChange(e.target.value)}
            defaultValue={task.title}
          />
        : <div className={`text-lg font-bold ${task.done && "line-through text-primaryGrey"}`}>{task.title || "No Title"}</div>
      }
    </div>
  )
};
