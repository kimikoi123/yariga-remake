import { AiOutlineAppstore, AiOutlineStar } from "react-icons/ai"
import { BsBuildings, BsPeople } from "react-icons/bs"
import { BiMessageDetail } from "react-icons/bi"
import { CgProfile } from "react-icons/cg"
import { Link } from "react-router-dom"

interface NavLinkProps {
  name: string
  title: string
  link: string
  active: string
  handleMenuClick: (id: string) => void
  handleOffCanvas: () => void
}

export default function NavLink({ name, title, link, active, handleMenuClick, handleOffCanvas }: NavLinkProps) {
  return (
    <Link to={link} onClick={() => {
      handleMenuClick(name)
      handleOffCanvas()
      }}>
      <div className={`flex items-center px-3 py-2 rounded-lg gap-3 ${active === name ? 'bg-[#475BE8] text-white' : ''}`}>
        {name === "dashboard" && <AiOutlineAppstore />}
        {name === "property" && <BsBuildings />}
        {name === "agent" && <BsPeople />}
        {name === "review" && <AiOutlineStar />}
        {name === "message" && <BiMessageDetail />}
        {name === "my-profile" && <CgProfile />}
        <div>{title}</div>
      </div>
    </Link>
  )
}
