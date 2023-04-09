import { IoIosArrowDown } from "react-icons/io"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { useState } from "react"
import { exampleProperties } from "../../data/data"
import PropertyListCard from "../../components/PropertyListCard"

export default function PropertyList() {
  const [activeButton, setActiveButton] = useState("Popular")

  function handleActiveButton(name: string) {
    setActiveButton(name)
  }

  return (
    <div className="bg-white rounded-3xl pb-4">
      <div className="flex justify-between items-center p-4">
        <div className="font-bold text-xl">Property List</div>
        <div className="flex gap-5">
          {["Popular", "Recommended", "Newest", "Most Recent"].map((menu) => (
            <div
              onClick={() => handleActiveButton(menu)}
              className={`cursor-pointer flex items-center py-3 px-5 rounded-lg ${
                activeButton === menu ? "bg-[#475BE8] text-white" : ""
              }`}
            >
              <div>{menu}</div>
              {menu === "Most Recent" && <IoIosArrowDown />}
            </div>
          ))}
        </div>
      </div>
      {/* <div className="relative">
        <div className="px-4 flex items-center gap-6">
          <div className="absolute left-0 right-0 p-4 flex items-center justify-start overflow-x-auto scroll-smooth">
            {exampleProperties.map((property) => (
              <PropertyListCard key={property.name} {...property} />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-3xl rounded-full p-2 shadow-lg cursor-pointer">
              <FiChevronLeft />
            </div>
            <div className="text-3xl rounded-full p-2 shadow-lg cursor-pointer">
              <FiChevronRight />
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative">
        <div
          id="content"
          className="absolute left-0 right-0 p-4 flex items-center justify-start overflow-x-auto scroll-smooth gap-5 px-5"
        >
          {exampleProperties.map((property) => (
            <PropertyListCard key={property.name} {...property} />
          ))}
        </div>
        {/* <div className="flex flex-col gap-2">
          <div className="text-3xl rounded-full p-2 shadow-lg cursor-pointer">
            <FiChevronLeft />
          </div>
          <div className="text-3xl rounded-full p-2 shadow-lg cursor-pointer">
            <FiChevronRight />
          </div>
        </div> */}
      </div>
    </div>
  )
}
