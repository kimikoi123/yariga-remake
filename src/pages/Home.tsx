import { Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard/Dashboard"
import Property from "./Property/Property"
import Agent from "./Agent/Agent"
import Review from ".//Review/Review"
import Message from "./Message/Message"
import MyProfile from "./MyProfile/MyProfile"
import { AiOutlineSearch, AiOutlineBell, AiOutlineClose } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react"
import { exampleNotifData, navigations } from "../data/data"
import NavLink from "../components/app/NavLink"
import NotificationItemComponent from "../components/app/NotificationItemComponent"
import PropertyDetails from "./Property/Details/PropertyDetails"
import AgentDetails from "./Agent/Details/AgentDetails"
import AgentProfile from "./Agent/Profile/AgentProfile"
import AddProperty from "./Property/AddProperty/AddProperty"
import { useMainContext } from "../contexts/MainContext"

export default function Home() {
  const [active, setActive] = useState("dashboard")
  const [profileDropDown, setProfileDropDown] = useState(false)
  const [notifDropDown, setNotifDropDown] = useState(false)
  const [isOpenOffCanvas, setIsOpenOffCanvas] = useState(false)
  const { userData, handleLogout } = useMainContext()

  function handleNotifDropDownClick() {
    if (notifDropDown) {
      setNotifDropDown(false)
    }
    if (!notifDropDown) {
      setProfileDropDown(false)
      setNotifDropDown(true)
    }
  }

  function handleProfileDropDownClick() {
    if (profileDropDown) {
      setProfileDropDown(false)
    }

    if (!profileDropDown) {
      setNotifDropDown(false)
      setProfileDropDown(true)
    }
  }

  function handleMenuClick(id: string) {
    setActive(id)
  }

  function handleOffCanvas() {
    if (isOpenOffCanvas) {
      setIsOpenOffCanvas(false)
    }

    if (!isOpenOffCanvas) {
      setIsOpenOffCanvas(true)
    }
  }

  return (
    <main className="bg-gray-100 ">
      <header className="flex items-stretch relative">
        <div
          className={`${
            isOpenOffCanvas ? "translate-x-0" : "-translate-x-full"
          } lg:static min-w-[200px] bg-white lg:translate-x-0 fixed top-0 left-0 z-40 h-screen lg:h-auto overflow-y-auto transition-transform shadow-lg lg:shadow-none`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="font-bold flex items-center gap-3">
                <img src="/yariga-logo.svg" alt="" />
                <div>Yariga</div>
              </div>
              <AiOutlineClose
                className="cursor-pointer lg:hidden"
                onClick={() => setIsOpenOffCanvas(false)}
              />
            </div>
            <div className="mt-5">
              {navigations.map((navigation) => (
                <NavLink
                  key={navigation.name}
                  active={active}
                  handleMenuClick={handleMenuClick}
                  {...navigation}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between p-4 bg-white">
            <div className="flex gap-4 lg:gap-2 items-center lg:bg-gray-100 px-3 py-1 rounded-lg lg:w-[400px]">
              <GiHamburgerMenu
                onClick={() => handleOffCanvas()}
                className="block text-gray-700 cursor-pointer lg:hidden"
              />

              <AiOutlineSearch className="text-gray-400 text-2xl cursor-pointer lg:cursor-default" />
              <input
                className="hidden lg:block bg-transparent outline-none flex-1"
                type="text"
                placeholder="Search Property Customer etc."
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="relative before:content-[''] before:bg-red-600 before:w-1 before:h-1 before:rounded-full before:absolute before:top-[4px] before:right-[8px]">
                <AiOutlineBell
                  onClick={() => handleNotifDropDownClick()}
                  className="text-gray-500 text-2xl mr-1 cursor-pointer"
                />
              </div>
              <div className="relative">
                <div
                  onClick={() => handleProfileDropDownClick()}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <img className="w-[40px] h-[40px] object-cover object-center rounded-full" src={userData.picture} alt="" />
                  <div className="hidden lg:block">
                    <div className="font-bold">{userData.name}</div>
                    <div className="text-gray-400">Company Manager</div>
                  </div>
                </div>
                <div
                  className={`${
                    profileDropDown ? "" : "hidden"
                  } absolute -left-44 lg:left-0 right-0 -bottom-5 z-10 translate-y-full bg-white p-5 rounded-lg flex flex-col gap-3 shadow-lg`}
                >
                  <div className="flex gap-4 cursor-pointer">
                    <img src="/person-icon.svg" alt="" />
                    <div>Edit Profile</div>
                  </div>
                  <div className="flex gap-4 cursor-pointer">
                    <img src="/settings-icon.svg" alt="" />
                    <div>Settings</div>
                  </div>
                  <div 
                  onClick={() => handleLogout()}
                  className="flex gap-4 cursor-pointer">
                    <img src="/logout-icon.svg" alt="" />
                    <div>Logout</div>
                  </div>
                  <div className="flex gap-4 cursor-pointer">
                    <img src="/darkmode-icon.svg" alt="" />
                    <div>Dark Mode</div>
                  </div>
                </div>
                <div
                  className={`${
                    notifDropDown ? "" : "hidden"
                  } absolute min-w-[360px] lg:min-w-[500px] right-0 -bottom-5 z-10 translate-y-full bg-white p-5 rounded-lg shadow-lg flex flex-col gap-3`}
                >
                  {exampleNotifData.map((data, index) => (
                    <NotificationItemComponent key={index} {...data} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/property" element={<Property />} />
              <Route path="/property/details" element={<PropertyDetails />} />
              <Route path="/property/add-property" element={<AddProperty />} />
              <Route path="/agent" element={<Agent />} />
              <Route path="/agent/details" element={<AgentDetails />} />
              <Route path="/agent/profile" element={<AgentProfile />} />
              <Route path="/review" element={<Review />} />
              <Route path="/message" element={<Message />} />
              <Route path="/my-profile" element={<MyProfile />} />
            </Routes>
          </div>
        </div>
      </header>
    </main>
  )
}
