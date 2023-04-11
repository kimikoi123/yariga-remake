import TopAgentComponent from "../../components/dashboard/TopAgentComponent";
import { topAgentData } from "../../data/data";


export default function TopAgent() {
  return (
    <div className='bg-white col-span-full lg:col-span-4 p-5 rounded-2xl'>
        <div className='flex justify-between items-center'>
            <div className='font-bold text-xl'>Top Agent</div>
            <button className='border py-3 px-5 rounded-xl text-gray-500' type='button'>View All</button>
        </div>
        <div className='mt-4 flex flex-col gap-3'>
            {/* Top Agents here */}
            {topAgentData.map((agent, index) => (
                <TopAgentComponent key={index} {...agent} />
            ))}
        </div>
    </div>
  )
}
