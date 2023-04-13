import { Link } from "react-router-dom"

export default function AgentListCard() {
  return (
    <div className="grid grid-cols-12 gap-2 lg:gap-5">
      <div className="col-span-5 lg:col-span-2 rounded-lg">
        <Link to="/agent/details">
          <img
            className=" object-cover object-center rounded-lg"
            src="/person-01.png"
            alt=""
          />
        </Link>
      </div>

      <div className="col-span-7 lg:col-span-10">
        <div className="flex justify-between">
          <div className="text-xl lg:text-2xl font-bold">
            Karen Eilla Boyette
          </div>
          <img
            className="sm:block hidden"
            src="three-dot-horizontal-icon.svg"
            alt=""
          />
        </div>
        <div className="sm:text-base text-sm my-1 lg:my-2">
          Real-Estate Agent
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-1 lg:gap-y-5 lg:mt-10">
          <div className="flex gap-2 sm:gap-4">
            <img src="/message-icon.svg" alt="" />
            <div className="sm:text-base text-sm">karenboyette@armyspy.com</div>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <img src="/location-icon.svg" alt="" />
            <div className="sm:text-base text-sm">Manchester</div>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <img src="/phone-icon.svg" alt="" />
            <div className="sm:text-base text-sm">+502-324-4194</div>
          </div>
          <div className="flex gap-2 sm:gap-4">
            <img src="/building-icon.svg" alt="" />
            <div className="sm:text-base text-sm">15 properties</div>
          </div>
        </div>
      </div>
    </div>
  )
}
