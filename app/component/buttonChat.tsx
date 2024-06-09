import Image from "next/image";

export default function ButtonChat({ active }: { active : boolean}) {
  return (
    <button
      className={`
        w-[60px] aspect-square rounded-full transition-all duration-300
        ${ active
        ? "w-[68px] bg-iPurple drop-shadow-darkGrey"
        : "bg-light group-hover:w-[68px] group-hover:bg-iPurple group-hover:drop-shadow-darkGrey"}
      `}
    >
      <Image src="/icon/chat2.png" alt="inbox" width={27} height={27} className={`m-auto ${active ? "hidden" : "group-hover:hidden"}`} />
      <Image src="/icon/chat.png" alt="inbox" width={27} height={27} className={`m-auto ${!active && "hidden group-hover:block"}`} />
    </button>
  );
}