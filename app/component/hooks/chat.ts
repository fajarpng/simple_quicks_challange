import { create } from "zustand";
import { persist } from "zustand/middleware";

type TChat = {
  sender: string
  chat: string
}

type TContact = {
  id: number
  type: "group" | "single"
  name: string
  sender?: string,
  date: string,
  chat: string,
}

type TChats = { [contactId: number] : TChat[] }

type TChatState = {
  chat: TChats
  contact: TContact[]
}
const defaultChat: TChats = {
  1: [
    {
      sender: "Cameron Phillips",
      chat: "Hey team, let's discuss the project updates in the meeting at 3 PM.",
    },
    {
      sender: "you",
      chat: "I will be there!",
    },
    {
      sender: "John Smith",
      chat: "Can we also talk about the new feature?",
    },
    {
      sender: "Alice Johnson",
      chat: "I'll prepare the report.",
    },
  ],
  2: [
    {
      sender: "Alex Johnson",
      chat: "Please submit your design drafts by the end of the week.",
    },
    {
      sender: "Alex Johnson",
      chat: "By email.",
    },
    {
      sender: "John Smith",
      chat: "I have already sent mine.",
    },
    {
      sender: "you",
      chat: "Mine will be ready by tomorrow.",
    },
    {
      sender: "Michael Brown",
      chat: "I'll need an extra day.",
    },
  ],
  3: [
    {
      sender: "FastVisa Support",
      chat: "Your visa application has been approved. Please check your email for further instructions.",
    },
    {
      sender: "FastVisa Support",
      chat: "Please submit your passport copy as soon as possible.",
    },
    {
      sender: "FastVisa Support",
      chat: "Your visa has been dispatched.",
    },
    {
      sender: "FastVisa Support",
      chat: "Thank you for using our service.",
    },
  ],
  4: [
    {
      sender: "Emily Davis",
      chat: "Remember to finalize the campaign details before our next meeting.",
    },
    {
      sender: "Team Member",
      chat: "I will work on it today.",
    },
    {
      sender: "Cameron Phillips",
      chat: "I'll review the final draft.",
    },
    {
      sender: "Alex Johnson",
      chat: "We should include the new logo.",
    },
  ],
  5: [
    {
      sender: "HR Department",
      chat: "Your leave request has been approved. Enjoy your time off!",
    },
    {
      sender: "HR Department",
      chat: "Please ensure all your tasks are completed before you leave.",
    },
    {
      sender: "HR Department",
      chat: "Remember to hand over your responsibilities.",
    },
    {
      sender: "HR Department",
      chat: "Contact us if you need any assistance during your leave.",
    },
  ],
  6: [
    {
      sender: "Michael Brown",
      chat: "We need to address the bugs reported in the latest sprint.",
    },
    {
      sender: "Developer",
      chat: "I am on it.",
    },
    {
      sender: "Tester",
      chat: "I found a few more issues.",
    },
    {
      sender: "Michael Brown",
      chat: "Let's discuss this in our next standup meeting.",
    },
  ],
  7: [
    {
      sender: "Client Feedback",
      chat: "Please review the attached feedback from the client and make necessary adjustments.",
    },
    {
      sender: "Client",
      chat: "We need faster response times.",
    },
    {
      sender: "Project Manager",
      chat: "I'll coordinate with the team to address this.",
    },
    {
      sender: "Client",
      chat: "Thank you for the quick response.",
    },
  ],
};

const contact: TContact[] = [
  {
    id: 1,
    type: "group",
    name: "Project Alpha",
    sender: "You",
    date: "2024-06-05T14:30:00",
    chat: "Hey team, let's discuss the project updates in the meeting at 3 PM.",
  },
  {
    id: 2,
    type: "group",
    name: "Design Team",
    sender: "Alex Johnson",
    date: "2024-06-08T10:00:00",
    chat: "Please submit your design drafts by the end of the week.",
  },
  {
    id: 3,
    type: "single",
    name: "FastVisa Support",
    date: "2024-06-07T09:15:00",
    chat: "Your visa application has been approved. Please check your email for further instructions.",
  },
  {
    id: 4,
    type: "group",
    name: "Marketing Campaign",
    sender: "Emily Davis",
    date: "2024-06-09T13:00:00",
    chat: "Remember to finalize the campaign details before our next meeting.",
  },
  {
    id: 5,
    type: "single",
    name: "HR Department",
    date: "2024-06-08T11:45:00",
    chat: "Your leave request has been approved. Enjoy your time off!",
  },
  {
    id: 6,
    type: "group",
    name: "Development Sprint",
    sender: "Michael Brown",
    date: "2024-06-11T16:00:00",
    chat: "We need to address the bugs reported in the latest sprint.",
  },
  {
    id: 7,
    type: "single",
    name: "Client Feedback",
    date: "2024-06-10T15:30:00",
    chat: "Please review the attached feedback from the client and make necessary adjustments.",
  },
];

const useChat = create<TChatState>()(
  persist(
    (set) => ({
      chat: defaultChat,
      contact
    }),
    { name: "chat" }
  )
)

export default useChat