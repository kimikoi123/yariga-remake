import { HiOutlineLocationMarker } from 'react-icons/hi'

export default function Property() {
  return (
    <section>
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold pb-5 pt-2">Property List</div>
        <button
          className="bg-[#475BE8] rounded-lg text-white p-3"
          type="button"
        >
          + Add Property
        </button>
      </div>
      <div className="bg-white rounded-3xl p-5">
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 bg-gray-100 w-72 p-2 rounded-lg">
            <img src="/src/assets/magnifying-icon.svg" alt="" />
            <input
              className="bg-transparent w-72 outline-none"
              type="text"
              placeholder="Enter an address, city or Zip code"
            />
          </div>
          <div className="flex items-center justify-between w-44 bg-gray-100 p-2 rounded-lg">
            <div>Any Status</div>
            <img src="/src/assets/chevron-down.svg" alt="" />
          </div>
          <div className="flex items-center justify-between w-44 bg-gray-100 p-2 rounded-lg">
            <div>Any Type</div>
            <img src="/src/assets/chevron-down.svg" alt="" />
          </div>
          <div className="flex items-center justify-between w-44 bg-gray-100 p-2 rounded-lg">
            <div>All Countries</div>
            <img src="/src/assets/chevron-down.svg" alt="" />
          </div>
          <div className="flex items-center justify-between w-44 bg-gray-100 p-2 rounded-lg">
            <div>Any States</div>
            <img src="/src/assets/chevron-down.svg" alt="" />
          </div>
          <div className="flex py-2 px-4 rounded-lg gap-3 bg-gray-100">
            <img src="/src/assets/tuner-icon.svg" alt="" />
            <div>More</div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex gap-4">
            <img src="/src/assets/property-01.png" alt="" />
            <div className='flex flex-col justify-between items-start'>
              <div  className="p-2 bg-[#CFC8FF] rounded-lg text-[#475BE8]">$7400</div>
              <div className="font-bold">Metro Jayakarta Hotel & Spa</div>
              <div className='flex items-center gap-2 text-gray-400'>
                <HiOutlineLocationMarker className='text-gray-400 text-xl' />
                <div>North Carolina, USA</div>
              </div>
              <div className='flex gap-10'>
                <div className='flex gap-2'>
                  <img src="/src/assets/bed-icon.svg" alt="bed-icon" />
                  <div>4 beds</div>
                </div>
                <div className='flex gap-2justify-between'>
                  <img src="/src/assets/cross-icon.svg" alt="" />
                  <div>28M</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-between mt-5'>
          <div>Showing 1 to 10 Propertys</div>
          <div className='flex'>
            <img className='p-3 cursor-pointer' src="src/assets/chevron-left.svg" alt="" />
            <div className='p-3 cursor-pointer'>1</div>
            <div className='p-3 cursor-pointer'>2</div>
            <div className='p-3 cursor-pointer'>3</div>
            <div className='p-3 cursor-pointer'>4</div>
            <div className='p-3 cursor-pointer'>5</div>
            <img className='p-3 cursor-pointer' src="src/assets/chevron-right.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
