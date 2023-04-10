import { MdLocationOn } from 'react-icons/md'
import { currencyFormatter } from '../utils/formatter'

interface PropertyListCardProps {
    name: string
    location: string
    price: number
    img: string
}

export default function PropertyListCard({ name, location, price, img }: PropertyListCardProps) {
  return (
    <div className="flex flex-col w-100 lg:min-w-[400px]">
      <img
        className="h-[200px] object-cover object-center rounded-xl"
        src={img}
        alt={name}
      />
      <div className="flex justify-between items-center pt-2.5">
        <div className="font-bold">{name}</div>
        <div className="p-2 bg-[#DADEFA] rounded text-[#475BE8] font-bold text-sm">
          {currencyFormatter(price)}
        </div>
      </div>
      <div className="flex items-center gap-1">
        <MdLocationOn />
        <div className="text-gray-500">{location}</div>
      </div>
    </div>
  )
}
