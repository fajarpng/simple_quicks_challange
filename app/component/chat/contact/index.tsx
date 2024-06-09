import dayjs from "dayjs";
import useChat from "../../hooks/chat";
import AvatarChat from "./avatar";
import SearchInput from "./searchInput";
import { useMemo, useState } from "react";

export default function ContactList(props: { onOpenChat : (id: number) => void}) {
  const [filter, setFilter] = useState<string>("")
  const { contact } = useChat()

  const data = useMemo(() => {
    let res = [...contact]
    if (filter) {
      // search by name with case isensitive 
      res = res.filter(v => (v.name.toLowerCase()).includes(filter.toLowerCase()))
    }
    return res
  }, [filter, contact])

  return (
    <div className="flex flex-col gap-4 p-4 w-full h-full">
      <SearchInput value={filter} onChange={setFilter} />

      <div className="flex-grow w-full overflow-y-auto">
        {data.map(v => (
          <div key={v.id} className=" flex border-b border-primaryDarkGrey py-4 pr-2 cursor-pointer" onClick={() => props.onOpenChat(v.id)}>
            <AvatarChat data={v} />
            <div className="flex-1">
              <div className="flex">
                <div className="flex-1 text-primaryBlue font-bold text-lg" onClick={() => props.onOpenChat(v.id)}>{v.name}</div>
                <div className="flex-0">{dayjs(v.date).format("DD-MM-YYYY HH:mm")}</div>
              </div>
              {v.sender && <div className="font-semibold">{v.sender} :</div>}
              <div className="line-clamp-1">{v.chat}</div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  )
}