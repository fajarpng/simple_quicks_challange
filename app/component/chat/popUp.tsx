"use client"
import { useEffect, useState } from "react";
import ChatList from "./chatList";
import ContactList from "./contact";
import useActionMenu from "../hooks/actionMenus";
import Loading from "./loading";
import useChat from "../hooks/chat";

export default function PopUpChat() {
  const { action } = useActionMenu()
  const [isLoading, setLoading] = useState<boolean>(true)
  const [contactId, setContactId] = useState<number>(0)
  const { contact } = useChat()

  // fake loading data
  useEffect(() => {
    const loadFakeData = async () => {
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 500)).then(() => setLoading(false));
    };

    action === "chat" && loadFakeData();
  }, [ action ]);

  return (
    <div className="bg-white text-primaryDarkGrey h-screen w-screen max-h-[637px] max-w-[634px] relative">
      
      {isLoading
        ? <Loading />
        : <ContactList onOpenChat={setContactId} />
      }

      <div className={`absolute top-0 h-full w-full bg-white grid text-sm text-slate-600 overflow-hidden transition-all duration-200 ease-in-out ${!!contactId ? 'z-20 grid-rows-[1fr] opacity-100' : '-z-10 grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          {contactId && <ChatList onBack={() => setContactId(0)} contactId={contactId} /> }
        </div>
      </div>

    </div>
  )
}