import { Routes, Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Property from "./pages/Property"
import Agent from "./pages/Agent"
import Review from "./pages/Review"
import Message from "./pages/Message"
import MyProfile from "./pages/MyProfile"
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineAppstore,
  AiOutlineStar,
} from "react-icons/ai"
import { BsBuildings, BsPeople } from "react-icons/bs"
import { BiMessageDetail } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { Link } from "react-router-dom"
import { useState } from 'react'
import { navigations } from "./data/data"
import NavLink from "./components/NavLink"



function App() {
  const [active, setActive] = useState('dashboard')

  function handleMenuClick(id: string) {
    setActive(id)
  }

  return (
    <main className="bg-gray-100">
      <header className="flex items-start">
        <div className="max-w-[200px] p-4 bg-white">
          <div className="font-bold flex items-center gap-3 max-w-[500px]">
            <img src="/src/assets/yariga-logo.svg" alt="" />
            <div>Yariga</div>
          </div>
          <div className="mt-5">
            {navigations.map(navigation => (
              <NavLink key={navigation.name} active={active} handleMenuClick={handleMenuClick} {...navigation} />
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between p-4 bg-white">
            <div className="flex gap-2 items-center bg-gray-200 px-3 py-1 rounded-lg w-[400px]">
              <AiOutlineSearch className="text-gray-400" />
              <input
                className="bg-transparent outline-none flex-1"
                type="text"
                placeholder="Search Property Customer etc."
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="relative before:hidden before:content-[''] before:bg-red-600 before:w-1 before:h-1 before:rounded-full before:absolute before:top-[4px] before:right-[8px]">
                <AiOutlineBell className="text-gray-500 text-xl mr-1 " />
              </div>

              <img src="/src/assets/profile-01.png" alt="" />
              <div>
                <div className="font-bold">Hawkins Maru</div>
                <div className="text-gray-400">Company Manager</div>
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
