import Image from "next/image";

export default function Loading() {
  return <div className="h-full w-full flex flex-col justify-center items-center">
  <Image src="/icon/loading.png" alt="loading" width={86} height={86} className=" animate-spin" />
  <p className="font-semibold">Loading Chats ...</p>
</div>
}