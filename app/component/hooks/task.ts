import { create } from "zustand";
import { persist } from "zustand/middleware";

type TTask = {
  title: string
  date?: Date | string
  description?: string
  done: boolean
}

type TTaskState = {
  task: TTask[]
  addTask: () => void
  setTask: (data: Partial<TTask>, index: number) => void
}

const newTask = {
  title: "",
  date: "",
  description: "",
  done: false,
}

const useTask = create<TTaskState>()(
  persist(
    (set) => ({
      task: [],
      addTask: () => set(({ task }) => ({ task: [...task, newTask] })),
      setTask: (data, index) => set(({ task }) => {
        task[index] = { ...task[index], ...data}
        return { task }
      }),
    }),
    { name: "task" }
  )
)

export default useTask