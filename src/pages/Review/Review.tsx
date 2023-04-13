import React from "react"
import ReviewListCard from "../../components/review/ReviewListCard"

export default function Review() {
  return (
    <section className='p-5'>
      <div className="text-3xl font-bold pb-5 pt-2">Review List</div>

      <div className="flex flex-col gap-4">
        <div className="flex items-start">
          <div className="flex bg-white rounded-lg px-2">
            <div className="relative after:content-[' '] after:block after:left-0 after:right-0 after:bg-primary after:h-1">
              <button className="px-3 py-2 text-primary">All Reviews</button>
            </div>
            <button className="px-3 py-2 text-gray-400">Published</button>
            <button className="px-3 py-2 text-gray-400">Deleted</button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <ReviewListCard />
          <ReviewListCard />
          <ReviewListCard />
          <ReviewListCard />
          <ReviewListCard />
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-0 gap-3 justify-between mt-5 items-center">
        <div>Showing 1 to 10 Reviews</div>
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
