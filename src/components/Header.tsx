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

export default function Header() {
  return (
    <header className="flex items-start">
      <div className="max-w-[200px] p-3">
        <div className="font-bold flex items-center gap-3 max-w-[500px]">
          <img src="/src/assets/yariga-logo.svg" alt="" />
          <div>Yariga</div>
        </div>
        <div className="mt-5">
          <Link to="/">
            <div className="flex items-center px-3 py-2 rounded-lg gap-3 bg-[#475BE8] text-white">
              <AiOutlineAppstore />
              <div>Dashboard</div>
            </div>
          </Link>
          <Link to="/property">
            <div className="flex items-center px-3 py-2 rounded-lg gap-3">
              <BsBuildings />
              <div>Property</div>
            </div>
          </Link>
          <Link to="/agent">
            <div className="flex items-center px-3 py-2 rounded-lg gap-3">
              <BsPeople />
              <div>Agent</div>
            </div>
          </Link>
          <Link to="/review">
            <div className="flex items-center px-3 py-2 rounded-lg gap-3">
              <AiOutlineStar />
              <div>Review</div>
            </div>
          </Link>
          <Link to="/message">
            <div className="flex items-center px-3 py-2 rounded-lg gap-3">
              <BiMessageDetail />
              <div>Message</div>
            </div>
          </Link>
          <Link to="/my-profile">
            <div className="flex items-center px-3 py-2 rounded-lg gap-3">
              <CgProfile />
              <div>My Profile</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between">
          <div className="flex items-center bg-gray-200 p-1 rounded-lg ">
            <AiOutlineSearch />
            <input
              className="bg-transparent"
              type="text"
              placeholder="Search Property Customer etc."
            />
          </div>
          <div className="flex items-center">
            <AiOutlineBell />
            <img src="/src/assets/profile-01.png" alt="" />
            <div>
              <div>Hawkins Maru</div>
              <div>Company Manager</div>
            </div>
          </div>
        </div>
        <div>Content Here</div>
      </div>
    </header>
  )
}
