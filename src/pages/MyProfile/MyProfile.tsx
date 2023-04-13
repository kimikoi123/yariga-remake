import React from "react"
import PropertyList from "../Dashboard/PropertyList"

export default function MyProfile() {
  return (
    <section className='p-5'>
      <div className="text-3xl font-bold pb-5 pt-2">My Profile</div>
      <div className="rounded-2xl flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-16 items-center bg-white rounded-3xl">
          <div className="md:w-[300px] w-full h-[200px] md:h-[300px] bg-cover rounded-3xl md:rounded-l-3xl md:rounded-r-none p-5 relative flex flex-col justify-start md:justify-end items-start" style={{ backgroundImage: "url('random.jpg')"}}>
            <div className="flex bg-gray-100 p-3 rounded-lg gap-3">
              <img src="/camera-icon.svg" alt="" />
              <div>Change Photo</div>
            </div>
            <img className="absolute md:translate-x-1/2 translate-y-1/2 md:translate-y-0 bottom-0 md:bottom-auto md:left-auto left-5 md:top-12 md:right-0 w-[80px] h-[80px]" src="profile-02.png" alt="" />
          </div>
          <div className="flex-1 pr-5">
            <div className="flex justify-between">
              <div className="font-bold text-xl">Mr. Alvert Flore</div>
              <img className="hidden md:block" src="/three-dot-horizontal-icon.svg" alt="" />
            </div>
            <div className="text-gray-400 mt-2">Admin</div>
            <div className="w-[500px] flex flex-col gap-5 mt-5 md:mb-0 mb-5">
              <div>
                <div>Address</div>
                <div className="flex gap-3 border p-2 rounded">
                  <img className="text-black" src="location-icon.svg" alt="" />
                  <div>4517 Washington Ave. Manchaster, Kentucky 39495</div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <div>Phone Number</div>
                  <div className="flex gap-3 border p-2 rounded">
                    <img src="/phone-icon.svg" alt="" />
                    <div>+0123 456 7890</div>
                  </div>
                </div>
                <div>
                  <div>Email</div>
                  <div className="flex gap-3 border p-2 rounded">
                    <img src="/message-icon.svg" alt="" />
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
    </section>
  )
}
