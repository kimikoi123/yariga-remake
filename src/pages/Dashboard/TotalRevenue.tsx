import { BiDotsHorizontalRounded } from "react-icons/bi"
import { BsFillArrowUpCircleFill } from "react-icons/bs"
import TotalRevenueChart from "../../components/TotalRevenueChart"

export default function TotalRevenue() {
  return (
    <div className="bg-white col-span-8 p-5 rounded-3xl flex flex-col gap-4">
      <div className="flex gap-5 items-center">
        <div className="flex-1 font-bold text-xl">Total Revenue</div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-[#475BE8] rounded-full" />
          <div className="text-sm text-gray-500">Last Month</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-[#CFC8FF] rounded-full" />
          <div className="text-sm text-gray-500">Running Month</div>
        </div>
        <BiDotsHorizontalRounded className="text-gray-500" />
      </div>
      <div className="flex gap-8 items-center">
        <div className="text-3xl font-bold">$236,535</div>
        <div className="flex items-center gap-4">
          <BsFillArrowUpCircleFill className="text-2xl text-[#475BE8]" />
          <div>
            <div className="text-[#475BE8] font-bold">0.8%</div>
            <div>Than last Month</div>
          </div>
        </div>
      </div>
      <TotalRevenueChart />
    </div>
  )
}
