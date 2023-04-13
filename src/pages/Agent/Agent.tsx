import AgentListCard from "../../components/agent/AgentListCard"
import { Link } from 'react-router-dom'

export default function Agent() {
  return (
    <section className="p-0 md:p-5">
      <div className="flex items-center justify-between p-5 md:p-0">
        <div className="text-3xl font-bold pb-5 pt-2">Agent List</div>
        <Link to="/agent/profile">
          <button
            className="bg-primary rounded-lg text-white p-3"
            type="button"
          >
            + Add Agent
          </button>
        </Link>
      </div>

      <div className="bg-white rounded-lg p-5 flex flex-col gap-10">
        <AgentListCard />
        <AgentListCard />
        <AgentListCard />
        <AgentListCard />
        <AgentListCard />
        <AgentListCard />
      </div>

      <div className="flex justify-between mt-5 items-center gap-2 md:gap-0 flex-col md:flex-row">
        <div>Showing 1 to 10 Name</div>
        <div className="flex bg-white rounded-lg">
          <div className="w-12 h-12 grid place-items-center rounded-lg cursor-pointer">
            <img src="/chevron-left.svg" alt="" />
          </div>

          <div className="w-12 h-12 grid place-items-center rounded-lg cursor-pointer bg-[#475BE8] text-white">
            1
          </div>
          <div className="w-12 h-12 grid place-items-center rounded-lg cursor-pointer">
            2
          </div>
          <div className="w-12 h-12 grid place-items-center rounded-lg cursor-pointer">
            3
          </div>
          <div className="w-12 h-12 grid place-items-center rounded-lg cursor-pointer">
            <img className="" src="chevron-right.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
