import { BsThreeDotsVertical } from "react-icons/bs"

interface TopAgentComponentProps {
    name: string
    image: string
}

export default function TopAgentComponent({ name, image } : TopAgentComponentProps) {
  return (
    <div className="flex justify-between gap-4 items-center">
      <img src={image} alt="" />
      <div className="flex-1">
        <div className="font-bold">{name}</div>
        <div className="text-sm text-gray-400">Top Agent</div>
      </div>
      <BsThreeDotsVertical className="text-gray-400" />
    </div>
  )
}
