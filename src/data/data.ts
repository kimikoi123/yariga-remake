import {
    AiOutlineSearch,
    AiOutlineBell,
    AiOutlineAppstore,
    AiOutlineStar,
  } from "react-icons/ai"
  import { BsBuildings, BsPeople } from "react-icons/bs"
  import { BiMessageDetail } from "react-icons/bi"
  import { CgProfile } from "react-icons/cg"

export const navigations = [
    {
        name: 'dashboard',
        title: 'Dashboard',
        link: '/'
    },
    {
        name: 'property',
        title: 'Property',
        link: '/property'
    },
    {
        name: 'agent',
        title: 'Agent',
        link: '/agent'
    },
    {
        name: 'review',
        title: 'Review',
        link: '/review'
    },
    {
        name: 'message',
        title: 'Message',
        link: '/message'
    },
    {
        name: 'my-profile',
        title: 'My Profile',
        link: '/my-profile'
    },
]