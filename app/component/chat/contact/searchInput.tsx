import Image from "next/image";

interface TSearchInput {
  value: string
  onChange: (value: string) => void
}
export default function SearchInput({ value, onChange }: TSearchInput) {
  return (
    <div className="border rounded-md border-primaryDarkGrey h-8 flex items-center px-11">
      <input
        placeholder="Search" type="search" className="flex-1 px-2 placeholder:text-primaryDarkGrey focus:outline-none"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <Image src="/icon/search.png" alt="loading" width={14} height={14} className=" brightness-0" />
    </div>
  )
}