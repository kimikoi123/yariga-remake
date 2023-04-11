import React from 'react'
import AgentListCard from '../../components/agent/AgentListCard'

export default function Agent() {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='text-3xl font-bold pb-5 pt-2'>Agent List</div>
        <button className='bg-primary rounded-lg text-white p-3' type='button'>+ Add Agent</button>
      </div>


      <div className='bg-white rounded-lg p-5 flex flex-col gap-10'>
        <AgentListCard />
        <AgentListCard />
        <AgentListCard />
        <AgentListCard />
        <AgentListCard />
        <AgentListCard />
      </div>
      

      <div className="flex justify-between mt-5 items-center">
          <div>Showing 1 to 10 Name</div>
          <div className="flex">
            <div className="w-12 h-12 grid place-items-center rounded-lg cursor-pointer">
              <img src="chevron-left.svg" alt="" />
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
              4
            </div>
            <div className="w-12 h-12 grid place-items-center rounded-lg cursor-pointer">
              5
            </div>
            <div className="w-12 h-12 grid place-items-center rounded-lg cursor-pointer">
              <img className="" src="chevron-right.svg" alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}
