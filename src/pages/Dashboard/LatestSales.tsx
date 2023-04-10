import { BsArrowRightShort } from 'react-icons/bs'
import LatestSalesComponent from '../../components/LatestSalesComponent'
import { exampleProperties } from '../../data/data'

export default function LatestSales() {
  return (
    <div className='bg-white col-span-full lg:col-span-5 p-5 rounded-2xl'>
        <div className='flex justify-between items-center py-1'>
            <div className='text-xl font-bold'>Latest Sales</div>
            <BsArrowRightShort className='text-4xl text-gray-400' />
        </div>
        <div className='mt-4 flex flex-col gap-4'>
            {/* Sales Here */}
            {exampleProperties.map((property, index) => {
                if(index < 4) {
                    return <LatestSalesComponent key={index} {...property} />
                }
            })}
        </div>
    </div>
  )
}
