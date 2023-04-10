import { IoIosArrowDown } from "react-icons/io"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi"
import { useState } from "react"
import { exampleProperties } from "../../data/data"
import PropertyListCard from "../../components/PropertyListCard"

export default function PropertyList() {
  const [activeButton, setActiveButton] = useState("Popular")

  function scrollLeft() {
    document.getElementById("content")!.scrollLeft -= 425
  }
  function scrollRight() {
    document.getElementById("content")!.scrollLeft += 425
  }

  function handleActiveButton(name: string) {
    setActiveButton(name)
  }



  return (
    <div className="bg-white rounded-3xl pb-4">
      <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row justify-between items-start lg:items-center p-4">
        <div className="font-bold text-xl">Property List</div>
        <div className="flex gap-5 flex-wrap">
          {["Popular", "Recommended", "Newest", "Most Recent"].map(
            (menu, index) => (
              <div
                key={index}
                onClick={() => handleActiveButton(menu)}
                className={`cursor-pointer flex items-center py-3 px-5 rounded-lg ${
                  activeButton === menu ? "bg-[#475BE8] text-white" : ""
                }`}
              >
                <div>{menu}</div>
                {menu === "Most Recent" && <IoIosArrowDown />}
              </div>
            )
          )}
        </div>
      </div>
      <div className="lg:h-[280px]">
        <div className="relative">
          <div
            id="content"
            className="lg:absolute left-0 right-0 flex-col lg:flex-row flex items-center justify-start overflow-x-hidden px-4 lg:px-0 scroll-smooth gap-8 lg:ml-5 lg:mr-28"
          >
            {exampleProperties.map((property, index) => (
              <PropertyListCard key={index} {...property} />
            ))}
          </div>
          <div className="hidden lg:flex absolute right-10 top-20  flex-col gap-2">
            <div
              onClick={() => scrollLeft()}
              className="text-3xl rounded-full p-2 shadow-lg cursor-pointer"
            >
              <FiChevronLeft />
            </div>
            <div
              onClick={() => scrollRight()}
              className="text-3xl rounded-full p-2 shadow-lg cursor-pointer"
            >
              <FiChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
