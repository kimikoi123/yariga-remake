import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard/Dashboard"
import Property from "./pages/Property/Property"
import Agent from "./pages/Agent/Agent"
import Review from "./pages/Review/Review"
import Message from "./pages/Message/Message"
import MyProfile from "./pages/MyProfile/MyProfile"
import { AiOutlineSearch, AiOutlineBell } from "react-icons/ai"
import { useState } from "react"
import { exampleNotifData, navigations } from "./data/data"
import NavLink from "./components/app/NavLink"
import NotificationItemComponent from "./components/app/NotificationItemComponent"


function App() {
  const [active, setActive] = useState("dashboard")
  const [profileDropDown, setProfileDropDown] = useState(false)
  const [notifDropDown, setNotifDropDown] = useState(false)
  const [isOpenOffCanvas, setIsOpenOffCanvas] = useState(false)

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
    <main className="bg-gray-100">
      <header className="flex items-stretch">
        <div className={`${isOpenOffCanvas ? 'block' : 'hidden'} lg:block min-w-[200px] bg-white`}>
          <div className="fixed p-4">
            <div className="font-bold flex items-center gap-3">
              <img src="yariga-logo.svg" alt="" />
              <div>Yariga</div>
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
              <img 
              onClick={() => handleOffCanvas()}
              className="block text-gray-400 cursor-pointer lg:hidden" src="hamburger-icon.svg" alt="" />
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
                className="text-gray-500 text-2xl mr-1 cursor-pointer" />
              </div>
              <div className="relative">
                <div
                  onClick={() => handleProfileDropDownClick()}
                  className="flex gap-2 items-center cursor-pointer"
                >
                  <img src="profile-01.png" alt="" />
                  <div className="hidden lg:block">
                    <div className="font-bold">Hawkins Maru</div>
                    <div className="text-gray-400">Company Manager</div>
                  </div>
                </div>
                <div
                  className={`${
                    profileDropDown ? "" : "hidden"
                  } absolute -left-44 lg:left-0 right-0 -bottom-5 z-10 translate-y-full bg-white p-5 rounded-lg flex flex-col gap-3 shadow-lg`}
                >
                  <div className="flex gap-4 cursor-pointer">
                    <img src="person-icon.svg" alt="" />
                    <div>Edit Profile</div>
                  </div>
                  <div className="flex gap-4 cursor-pointer">
                    <img src="settings-icon.svg" alt="" />
                    <div>Settings</div>
                  </div>
                  <div className="flex gap-4 cursor-pointer">
                    <img src="logout-icon.svg" alt="" />
                    <div>Logout</div>
                  </div>
                  <div className="flex gap-4 cursor-pointer">
                    <img src="darkmode-icon.svg" alt="" />
                    <div>Dark Mode</div>
                  </div>
                </div>
                <div
                  className={`${
                    notifDropDown ? "" : "hidden"
                  } absolute min-w-[360px] lg:min-w-[500px] right-0 -bottom-5 z-10 translate-y-full bg-white p-5 rounded-lg shadow-lg flex flex-col gap-3`}
                >
                  {exampleNotifData.map((data,index) => (
                    <NotificationItemComponent key={index} {...data} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="p-5 ">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/property" element={<Property />} />
              <Route path="/agent" element={<Agent />} />
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

export default App
