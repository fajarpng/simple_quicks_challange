
type TColor = {
  text: string
  bg: string
}

type TChat = {
  sender: string
  chat: string
}

interface ICardChat {
  chat: TChat & { color: TColor }
}

export default function CardChat({ chat }: ICardChat) {
  return (
    <div className={`flex flex-col ${ chat.sender === "you" ? "items-end" : "items-start"} text-md mb-4`}>
      <div className={`font-bold mb-2 ${chat.color.text}`}>{chat.sender}</div>
      <div className={`p-2 max-w-[500px] rounded-md ${chat.color.bg}`}>{chat.chat}</div>
    </div>
  )
}