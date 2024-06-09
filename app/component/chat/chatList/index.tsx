import { useMemo } from "react";
import useChat from "../../hooks/chat";
import Header from "./header";
import InputMessage from "./inputMessage";
import CardChat from "./card";

type TChat = {
  sender: string
  chat: string
}

type TColor = {
  text: string
  bg: string
}

type TColoredChat = TChat & {
  color: TColor
}

interface IChatLsit {
  onBack: () => void
  contactId: number
}

const colorScheme: TColor[] = [
  {
    text: ' text-cTOrange ',
    bg: ' bg-cOrange '
  },
  {
    text: ' text-cTGreen ',
    bg: ' bg-cGreen '
  },
  {
    text: ' text-cTPurple ',
    bg: ' bg-cPurple '
  }
]

export default function ChatList({ onBack, contactId }: IChatLsit) {
  const { chat } = useChat()

  function assignColor(chatData: TChat[]): TColoredChat[] {
    const senderColors: Map<string, TColor> = new Map(); // Map sender to their color
  
    const coloredData: TColoredChat[] = [];
    for (const message of chatData) {
      const sender = message.sender;
      let color = senderColors.get(sender);
  
      if (!color) {
        // New sender, assign a color (avoiding bias towards specific colors)
        color = pickColor();
        senderColors.set(sender, color);
      }
  
      coloredData.push({ ...message, color });
    }
    return coloredData;
  }

  function pickColor(): TColor {
    // Choose a color from available options with equal probability
    const randomIndex = Math.floor(Math.random() * colorScheme.length);
    return colorScheme[randomIndex];
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => assignColor(chat[contactId]), [chat, contactId])

  return (
    <div className="flex flex-col justify-between h-full">
      {/* header */}
      <Header onBack={onBack} contactId={contactId} />
      {/* chat list */}
      <div className=" w-full overflow-y-auto h-full p-4">
        {data.map((v,i: number) => <CardChat key={i} chat={v} /> )}
      </div>
      {/* input chat */}
      <InputMessage />
    </div>
  )
}