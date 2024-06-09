import Image from "next/image";
import useChat from "../../hooks/chat";
import { useMemo } from "react";

interface IHeaderChat {
  onBack: () => void
  contactId: number
}

export default function Header({onBack, contactId}: IHeaderChat) {
  const { contact } = useChat()

  const data = useMemo(() => {
    return contact.find(v => v.id === contactId)
  }, [contact, contactId])

  return (
    <div className="flex justify-between py-4 px-6 border-b border-primaryGrey">
      <div className="flex gap-4">
        <button onClick={onBack}>
          <Image src="/icon/arrowLeft.png" alt="back" width={24} height={24} className=" brightness-0" />
        </button>

        <div>
          <div className="text-lg text-primaryBlue font-bold">{data?.name}</div>
          {data?.type === "group" && <div className="text-sm">3 Participants</div>}
        </div>
      </div>

      <button onClick={onBack}>
        <Image src="/icon/close.png" alt="back" width={14} height={14} className=" brightness-0" />
      </button>
    </div>
  )
}