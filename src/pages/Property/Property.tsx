import PropertyListComponent from "../../components/property/PropertyListComponent"
import { useState } from "react"

export default function Property() {
  const [isActiveAnyStatus, setIsActiveAnyStatus] = useState(false)
  const [isActiveAnyType, setIsActiveAnyType] = useState(false)
  const [selectedStatus, setSelectedStatus] = useState('Any Status')
  const [selectedType, setSelectedType] = useState('Any Type')

  function handleActiveAnyStatusChange() {
    if (isActiveAnyStatus) {
      return setIsActiveAnyStatus(false)
    }
    return setIsActiveAnyStatus(true)
  }

  function handleActiveAnyTypeChange() {
    if (isActiveAnyType) {
      return setIsActiveAnyType(false)
    }
    return setIsActiveAnyType(true)
  }



  return (
    <section>
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold pb-5 pt-2">Property List</div>
        <button
          className="bg-primary rounded-lg text-white p-3"
          type="button"
        >
          + Add Property
        </button>
      </div>
      <div className="bg-white rounded-3xl p-5">
        <div className="flex gap-4 items-center flex-wrap">
          <div className="flex gap-2 bg-gray-100 w-32 sm:w-44 p-2 rounded-lg">
            <img src="magnifying-icon.svg" alt="" />
            <input
              className="bg-transparent outline-none w-20 sm:w-32"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="w-32 sm:w-44 bg-gray-100 p-2 rounded-lg  relative">
            <div 
            onClick={() => handleActiveAnyStatusChange()}
            className="flex items-center justify-between cursor-pointer">
              <div>{selectedStatus}</div>
              <img src="chevron-down.svg" alt="" />
            </div>
            <div className={`${isActiveAnyStatus ? 'block' : 'hidden'} absolute left-0 right-0 bottom-0 z-10 translate-y-full bg-white rounded-lg`}>
              {['Any Status', 'For Sale', 'For Rent'].map((status, index) => (
                <div key={index} onClick={() => {
                  setSelectedStatus(status)
                  setIsActiveAnyStatus(false)
                }} className={`${selectedStatus === status ? 'bg-primary text-white' : 'bg-white'} p-2 rounded-lg`}>{status}</div>
              ))}
            </div>
          </div>
          <div className="w-32 sm:w-44 bg-gray-100 p-2 rounded-lg  relative">
            <div 
            onClick={() => handleActiveAnyTypeChange()}
            className="flex items-center justify-between cursor-pointer">
              <div>{selectedType}</div>
              <img src="chevron-down.svg" alt="" />
            </div>
            <div className={`${isActiveAnyType ? 'block' : 'hidden'} absolute left-0 right-0 bottom-0 z-10 translate-y-full bg-white rounded-lg`}>
            {['Any Type', 'Apartments', 'Houses', 'Commercial', 'Garages', 'Lots'].map((type, index) => (
                <div key={index} onClick={() => {
                  setSelectedType(type)
                  setIsActiveAnyType(false)
                }} className={`${selectedType === type? 'bg-primary text-white' : 'bg-white'} p-2 rounded-lg cursor-pointer`}>{type}</div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between w-32 sm:w-44 bg-gray-100 p-2 rounded-lg cursor-pointer">
            <div>All Countries</div>
            <img src="chevron-down.svg" alt="" />
          </div>
          <div className="flex items-center justify-between w-32 sm:w-44 bg-gray-100 p-2 rounded-lg cursor-pointer">
            <div>Any States</div>
            <img src="chevron-down.svg" alt="" />
          </div>
          <div className="flex py-2 px-4 rounded-lg cursor-pointer gap-3 bg-gray-100">
            <img src="tuner-icon.svg" alt="" />
            <div>More</div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 xl:grid-cols-2 grid-rows-5 gap-5">
          <PropertyListComponent />
          <PropertyListComponent />
          <PropertyListComponent />
          <PropertyListComponent />
          <PropertyListComponent />
          <PropertyListComponent />
          <PropertyListComponent />
          <PropertyListComponent />
          <PropertyListComponent />
          <PropertyListComponent />
          <PropertyListComponent />
        </div>

        <div className="flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between mt-5 items-center">
          <div className="text-gray-400">Showing 1 to 10 Properties</div>
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
              <img className="" src="chevron-right.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
