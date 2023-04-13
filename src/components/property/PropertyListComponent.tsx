import { Link } from "react-router-dom"

export default function PropertyListComponent() {
  return (
    <div className="flex gap-4">
      <Link to={'/property/details'}>
        <img
          className="object-cover rounded-lg max-w-[300px] w-full  h-auto"
          src="/random.jpg"
          alt=""
        />
      </Link>

      <div className="flex flex-col items-start min-w-[200px]">
        <div className="text-sm sm:text-base font-semibold p-2 bg-[#CFC8FF] rounded-lg text-[#475BE8]">
          $7400
        </div>
        <div className="font-bold text-sm sm:text-base my-1 sm:my-3">Metro Jayakarta Hotel & Spa</div>
        <div className="flex items-center gap-2 text-gray-400">
          <img src="/location-gray-icon.svg" className="text-gray-400 text-xl" />
          <div className="text-sm sm:text-base">North Carolina, USA</div>
        </div>
        <div className="flex gap-10 my-1 sm:my-3">
          <div className="flex gap-2">
            <img src="/bed-icon.svg" alt="bed-icon" />
            <div className="text-sm sm:text-base font-medium">4 beds</div>
          </div>
          <div className="flex gap-2">
            <img src="/cross-icon.svg" alt="" />
            <div className="text-sm sm:text-base font-medium">28 M</div>
          </div>
        </div>
      </div>
    </div>
  )
}
