import { BsThreeDotsVertical } from "react-icons/bs"

export default function Customer() {
  return (
    <div className='bg-white col-span-full lg:col-span-3 p-5 rounded-2xl'>
        <div className="flex justify-between py-2 items-center">
            <div className="text-xl font-bold">Customer</div>
            <BsThreeDotsVertical className="text-gray-400" />
        </div>
        <div className="flex flex-col gap-4 border-b pb-7">
            <div className="text-gray-400 font-bold">Total Customers</div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <div className="text-3xl">5007k</div>
                    <div className="text-[#2ED480] font-bold">21.77%</div>
                </div>
                <img src="/src/assets/frame-01.png" alt="frame" />
            </div>
        </div>
        <div className="flex flex-col gap-4 pb-7 pt-5">
            <div className="text-gray-400 font-bold">New Customers This Month</div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    <div className="text-3xl">12k</div>
                    <div className="text-[#2ED480] font-bold">21.77%</div>
                </div>
                <img src="/src/assets/frame-02.png" alt="frame" />
            </div>
        </div>
    </div>
  )
}
