export default function InputMessage() {
  return (
    <div className="flex gap-4 p-4 items-start">
      <textarea
        placeholder="Type message here"
        rows={1}
        className="flex-1 border border-primaryDarkGrey rounded-md p-2 focus:outline-none "
      />
      <button className="bg-primaryBlue rounded-md text-white px-4 py-2 font-bold">Send</button>
    </div>
  )
}