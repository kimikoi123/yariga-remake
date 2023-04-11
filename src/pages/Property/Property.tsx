import PropertyListComponent from "../../components/property/PropertyListComponent"
import { useState } from "react"

export default function Property() {
  const [isActiveAnyStatus, setIsActiveAnyStatus] = useState(false)
  const [isActiveAnyType, setIsActiveAnyType] = useState(false)

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
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 bg-gray-100 w-72 p-2 rounded-lg">
            <img src="magnifying-icon.svg" alt="" />
            <input
              className="bg-transparent w-72 outline-none"
              type="text"
              placeholder="Enter an address, city or Zip code"
            />
          </div>
          <div className="w-44 bg-gray-100 p-2 rounded-lg  relative">
            <div 
            onClick={() => handleActiveAnyStatusChange()}
            className="flex items-center justify-between cursor-pointer">
              <div>Any Status</div>
              <img src="chevron-down.svg" alt="" />
            </div>
            <div className={`${isActiveAnyStatus ? 'block' : 'hidden'} absolute left-0 right-0 bottom-0 z-10 translate-y-full bg-white rounded-lg`}>
              <div className="bg-[#475BE8] p-2 rounded-lg text-white">
                Any Type
              </div>
              <div className="bg-white p-2 rounded-lg">For Sale</div>
              <div className="bg-white p-2 rounded-lg">For Rent</div>
            </div>
          </div>
          <div className="w-44 bg-gray-100 p-2 rounded-lg  relative">
            <div 
            onClick={() => handleActiveAnyTypeChange()}
            className="flex items-center justify-between cursor-pointer">
              <div>Any Type</div>
              <img src="chevron-down.svg" alt="" />
            </div>
            <div className={`${isActiveAnyType ? 'block' : 'hidden'} absolute left-0 right-0 bottom-0 z-10 translate-y-full bg-white rounded-lg`}>
              <div className="bg-[#475BE8] p-2 rounded-lg text-white">
                Any Type
              </div>
              <div className="bg-white p-2 rounded-lg">Apartments</div>
              <div className="bg-white p-2 rounded-lg">Houses</div>
              <div className="bg-white p-2 rounded-lg">Commercial</div>
              <div className="bg-white p-2 rounded-lg">Garages</div>
              <div className="bg-white p-2 rounded-lg">Lots</div>
            </div>
          </div>
          <div className="flex items-center justify-between w-44 bg-gray-100 p-2 rounded-lg">
            <div>All Countries</div>
            <img src="chevron-down.svg" alt="" />
          </div>
          <div className="flex items-center justify-between w-44 bg-gray-100 p-2 rounded-lg">
            <div>Any States</div>
            <img src="chevron-down.svg" alt="" />
          </div>
          <div className="flex py-2 px-4 rounded-lg gap-3 bg-gray-100">
            <img src="tuner-icon.svg" alt="" />
            <div>More</div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 grid-rows-5 gap-5">
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
          <PropertyListComponent />
          <PropertyListComponent />
          <PropertyListComponent />
          <PropertyListComponent />
        </div>

        <div className="flex justify-between mt-5 items-center">
          <div>Showing 1 to 10 Propertys</div>
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
    </section>
  )
}
