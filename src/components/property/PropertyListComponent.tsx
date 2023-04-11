import { HiOutlineLocationMarker } from 'react-icons/hi'

export default function PropertyListComponent() {
  return (
    <div className="flex gap-4">
            <img className='w-[350px] h-[200px] object-cover rounded-2xl' src="/src/assets/random.jpg" alt="" />
            <div className='flex flex-col justify-between items-start'>
              <div  className="p-2 bg-[#CFC8FF] rounded-lg text-[#475BE8]">$7400</div>
              <div className="font-bold">Metro Jayakarta Hotel & Spa</div>
              <div className='flex items-center gap-2 text-gray-400'>
                <HiOutlineLocationMarker className='text-gray-400 text-xl' />
                <div>North Carolina, USA</div>
              </div>
              <div className='flex gap-10'>
                <div className='flex gap-2'>
                  <img src="src/assets/bed-icon.svg" alt="bed-icon" />
                  <div>4 beds</div>
                </div>
                <div className='flex gap-2'>
                  <img src="src/assets/cross-icon.svg" alt="" />
                  <div>28 M</div>
                </div>
              </div>
            </div>
          </div>
  )
}
