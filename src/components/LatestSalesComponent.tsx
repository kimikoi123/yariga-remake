import { currencyFormatter } from "../utils/formatter"

interface LatestSalesComponent {
    img: string
    name: string
    sales: number
    location: string
}

export default function LatestSalesComponent({ img, name, sales, location }: LatestSalesComponent) {
  return (
    <div className="flex justify-between items-center gap-3">
      <img
        className="w-16 h-16 rounded-lg object-center object-cover"
        src={img}
        alt=""
      />
      <div className="flex-1 flex flex-col gap-1">
        <div className="font-bold text-lg">{name}</div>
        <div className="text-gray-400">{location}</div>
      </div>
      <div className="text-[#2F80ED] text-2xl">+{currencyFormatter(sales).split('.')[0]}</div>
    </div>
  )
}
