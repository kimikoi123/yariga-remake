import React from "react"
import PropertyList from "../Dashboard/PropertyList"

export default function MyProfile() {
  return (
    <div>
      <div className="text-3xl font-bold pb-5 pt-2">My Profile</div>
      <div className="rounded-2xl flex flex-col gap-5">
        <div className="flex gap-16 items-center bg-white rounded-3xl">
          <div className="bg-[url('random.jpg')] w-[300px] h-[300px] bg-cover rounded-l-3xl p-5 relative flex flex-col justify-end items-start">
            <div className="flex bg-gray-100 p-3 rounded-lg">
              <img src="camera-icon.svg" alt="" />
              <div>Change Photo</div>
            </div>
            <img className="absolute translate-x-1/2 top-12 right-0 w-[80px] h-[80px]" src="profile-02.png" alt="" />
          </div>
          <div className="flex-1 pr-5">
            <div className="flex justify-between">
              <div className="font-bold text-xl">Mr. Alvert Flore</div>
              <img src="three-dot-horizontal-icon.svg" alt="" />
            </div>
            <div className="text-gray-400 mt-2">Admin</div>
            <div className="w-[500px] flex flex-col gap-5 mt-5">
              <div>
                <div>Address</div>
                <div className="flex gap-3 border p-2 rounded">
                  <img className="text-black" src="location-icon.svg" alt="" />
                  <div>4517 Washington Ave. Manchaster, Kentucky 39495</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <div>Phone Number</div>
                  <div className="flex gap-3 border p-2 rounded">
                    <img src="phone-icon.svg" alt="" />
                    <div>+0123 456 7890</div>
                  </div>
                </div>
                <div>
                  <div>Email</div>
                  <div className="flex gap-3 border p-2 rounded">
                    <img src="message-icon.svg" alt="" />
                    <div>albart4578@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <PropertyList />
        </div>
      </div>
    </div>
  )
}
