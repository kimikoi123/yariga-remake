

export default function ReviewListCard() {
  return (
    <div className="bg-white p-4 flex gap-5 rounded-lg md:flex-row flex-col">
            <img
              className="w-20 h-20 rounded-2xl object-cover object-center"
              src="person-01.png"
              alt=""
            />
            <div className="">
              <div className="text-primary">#C01234</div>
              <div className="font-bold">James Sullivan</div>
              <div className="text-gray-400">Joined On 25-04-2022</div>
              <div className="text-gray-400">12:42 PM</div>
            </div>
            <div>
              <div>Friendly Service</div>
              <div>
                Josh, Lunar and everyone at Just Property in Hastings deserved a
                big Thank You from us for moving us from Jakarta to Medan during
                the lockdown.
              </div>
              <div className="flex gap-2 mt-4">
                <div className="py-1 px-4 border border-blue-500 rounded-full text-blue-500">
                  Excellent
                </div>
                <div className="py-1 px-4 border border-blue-500 rounded-full text-blue-500">
                  Great
                </div>
                <div className="py-1 px-4 border border-blue-500 rounded-full text-blue-500">
                  Best Service
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start md:items-center">
              <div className="flex gap-5 items-center">
                <div className="font-bold text-xl">5.0</div>
                <div className="flex gap-1">
                  <img src="/yellow-star-icon.svg" alt="" />
                  <img src="/yellow-star-icon.svg" alt="" />
                  <img src="/yellow-star-icon.svg" alt="" />
                  <img src="/yellow-star-icon.svg" alt="" />
                  <img src="/yellow-star-icon.svg" alt="" />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="px-5 py-2 border border-red-400 rounded-full text-red-400">
                  Reject
                </div>
                <div className="bg-green-400 text-white px-5 py-2 rounded-full">
                  Approve
                </div>
              </div>
            </div>
          </div>
  )
}
