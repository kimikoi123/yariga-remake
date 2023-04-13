import React from "react"

export default function PropertyDetails() {
  return (
    <section className="bg-white rounded-lg p-5">
      <div className="flex gap-4 mb-4">
        <img className="w-[10px]" src="/chevron-left.svg" alt="" />
        <div className="text-2xl font-semibold">Details</div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-full md:col-span-8 flex flex-col gap-4">
          <div className="grid grid-cols-8 gap-4">
            <img
              className="col-span-6 w-full max-h-[350px] object-cover object-center rounded-lg"
              src="/random.jpg"
              alt=""
            />
            <div className="col-span-2 flex flex-col gap-4">
              <img
                className="h-1/2 rounded-lg object-cover object-center"
                src="/random.jpg"
                alt=""
              />
              <div className="bg-black h-1/2 relative rounded-lg cursor-pointer">
                <img
                  className="h-full rounded-lg object-cover object-center"
                  src="/random.jpg"
                  alt=""
                />
                <div className="absolute inset-0 text-white grid place-items-center bg-[#00000050] rounded-lg">
                  +10
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-8 flex flex-col gap-2">
            <div className="grid grid-cols-8 gap-4">
              <div className="col-span-full md:col-span-6 flex flex-col gap-1">
                <div className="text-lg font-semibold col-span-6">
                  Apartment
                </div>
                <div className="text-xl font-semibold">
                  Star Sun Hotel & Apartment
                </div>
                <div className="flex items-center gap-2">
                  <img src="/location-icon.svg" alt="" />
                  <div>North Carolina, USA</div>
                </div>
              </div>
              <div className="hidden md:flex col-span-2  flex-col gap-1">
                <div className="flex gap-1 col-span-2">
                  <img src="/yellow-star-icon.svg" alt="" />
                  <img src="/yellow-star-icon.svg" alt="" />
                  <img src="/yellow-star-icon.svg" alt="" />
                  <img src="/yellow-star-icon.svg" alt="" />
                  <img src="/yellow-star-icon.svg" alt="" />
                </div>
                <div>Price</div>
                <div>
                  <span className="text-xl font-bold text-primary">$80</span>{" "}
                  For One Day
                </div>
              </div>
            </div>
            <div className="text-lg font-semibold my-1">Facility</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="flex gap-1 items-center">
                <img src="/bed-icon.svg" alt="" />
                <div>4 Beds</div>
              </div>
              <div className="flex gap-1 items-center">
                <img src="/bathroom-uiht.svg" alt="" />
                <div>Baths</div>
              </div>
              <div className="hidden md:flex gap-1 items-center">
                <img src="/cross-icon.svg" alt="" />
                <div>28M Area</div>
              </div>
              <div className="hidden md:flex gap-1 items-center">
                <img src="/smooking-uiht.svg" alt="" />
                <div>Smoking Area</div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              <div className="flex gap-1 items-center">
                <img src="/kitchen-uiht.svg" alt="" />
                <div>Kitchen</div>
              </div>
              <div className="flex gap-1 items-center">
                <img src="/kitchen-uiht-1.svg" alt="" />
                <div>Balcony</div>
              </div>
              <div className="hidden md:flex gap-1 items-center">
                <img src="/wifi-uiht.svg" alt="" />
                <div>Wifi</div>
              </div>
              <div className="hidden md:flex gap-1 items-center">
                <img src="/Parking-uiht.svg" alt="" />
                <div>Parking Area</div>
              </div>
            </div>
            <div className="text-lg font-semibold mt-1">Description</div>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              debitis recusandae, officiis eos ad accusantium! Dolorem pariatur
              magnam quis a consectetur nesciunt quasi, odit saepe voluptate
              officia architecto molestiae eius deserunt suscipit vitae! Fuga,
              similique. Accusantium incidunt quam earum reprehenderit fugit
              iste consequuntur et! Iusto voluptas repudiandae amet sequi et!
            </div>
          </div>
          <div></div>
        </div>

        <div className="col-span-full md:col-span-4 flex flex-col gap-4">
          <div className="col-span-4 border p-5 flex flex-col gap-3 rounded-lg">
            <img
              className="ml-auto"
              src="/three-dot-horizontal-icon.svg"
              alt=""
            />
            <img
              className="w-[100px] h-[100px] rounded-full object-cover object-center mx-auto"
              src="/person-01.png"
              alt=""
            />
            <div className="font-bold text-center">Hussain Ahmed</div>
            <div className="text-center text-gray-400">Agent</div>
            <div className="flex gap-5 justify-center text-gray-400">
              <img src="/location-icon.svg" alt="" />
              <div>North Carolina, USA</div>
            </div>
            <div className="font-bold text-center">10 Properties</div>
            <div className="flex gap-5 justify-center">
              <button className="flex py-2 w-32 justify-center gap-2 bg-primary items-center text-white rounded-lg">
                <img className="text-w" src="/white-chat.svg" alt="" />
                <div>Message</div>
              </button>
              <button className="flex py-2 w-32 justify-center gap-2 bg-green-500 items-center text-white rounded-lg">
                <img src="/phone-white.svg" alt="" />
                <div>Call</div>
              </button>
            </div>
          </div>
          <div className="col-span-4 flex flex-col gap-5">
            <img className="" src="/map.png" alt="" />
            <button className="py-2 bg-primary text-white rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
