import useTask from "../hooks/task"

export default function HeaderTask() {
  const { addTask } = useTask()

  return (
    <div className="flex justify-between gap-4 items-center">
      <select id="countries" className=" border border-primaryDarkGrey p-2 rounded-md focus:outline-none">
        <option value="">My Task</option>
        <option value="pe">Personal Errands</option>
        <option value="ut">Urgent To-Do</option>
      </select>
      <button
        className="bg-primaryBlue rounded-md text-white px-4 py-2 font-bold"
        onClick={addTask}
      >New Task</button>
    </div>
  )
}