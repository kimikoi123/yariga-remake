import { Link } from "react-router-dom"

export default function PropertyListComponent() {
  return (
    <div className="flex gap-4">
      <Link to={'/property/details'}>
        <img
          className="object-cover rounded-2xl max-w-[300px]"
          src="property-01.png"
          alt=""
        />
      </Link>

      <div className="flex flex-col justify-around items-start min-w-[220px]">
        <div className="font-semibold p-2 bg-[#CFC8FF] rounded-lg text-[#475BE8]">
          $7400
        </div>
        <div className="font-bold">Metro Jayakarta Hotel & Spa</div>
        <div className="flex items-center gap-2 text-gray-400">
          <img src="location-gray-icon.svg" className="text-gray-400 text-xl" />
          <div>North Carolina, USA</div>
        </div>
        <div className="flex gap-10">
          <div className="flex gap-2">
            <img src="bed-icon.svg" alt="bed-icon" />
            <div className="font-medium">4 beds</div>
          </div>
          <div className="flex gap-2">
            <img src="cross-icon.svg" alt="" />
            <div className="font-medium">28 M</div>
          </div>
        </div>
      </div>
    </div>
  )
}
