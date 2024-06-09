import { create } from "zustand";

type TAction = "closed" | "chat" | "task" | "open"

type TActionMenu = {
  action: TAction;
  setAction: (action: TAction) => void
}

const useActionMenu = create<TActionMenu>()(
  (set) => ({
    action: "closed",
    setAction: (action) => set(() => ({ action })),
  })
)

export default useActionMenu