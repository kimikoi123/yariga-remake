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

export const dashboardPieData = [
    {
        title: 'Properties for Sale',
        amount: 684,
        color: '#475BE8' 
    },
    {
        title: 'Properties for Rent',
        amount: 546,
        color: '#FD8539' 
    },
    {
        title: 'Total Customer',
        amount: 5732,
        color: '#2ED480' 
    },
    {
        title: 'Total City',
        amount: 90,
        color: '#FE6D8E' 
    },
] 

export const propertyReferralsData = [
    {
        title: 'Social Media',
        percent: '64%',
        color: 'bg-[#6C5DD3]',
        barLength: 'w-[64%]'
    },
    {
        title: 'Marketplaces',
        percent: '40%',
        color: 'bg-[#7FBA7A]',
        barLength: 'w-[40%]'
    },
    {
        title: 'Websites',
        percent: '50%',
        color: 'bg-[#FFCE73]',
        barLength: 'w-[50%]'
    },
    {
        title: 'Digital Ads',
        percent: '80%',
        color: 'bg-[#FFA2C0]',
        barLength: 'w-[80%]'
    },
    {
        title: 'Others',
        percent: '15%',
        color: 'bg-[#F45252]',
        barLength: 'w-[15%]'
    },
]

export const exampleProperties = [
    {
        name: 'Star Sun Hotel & Apartment',
        location: 'North Carolina, USA',
        price: 500,
        img: '/src/assets/property-01.png',
        sales: 35
    },
    {
        name: 'Letdo Ji Hotel & Apartment',
        location: 'New York City, USA',
        price: 500,
        img: '/src/assets/property-02.png',
        sales: 40
    },
    {
        name: 'Metro Jayakar Apartment',
        location: 'North Carolina, USA',
        price: 500,
        img: '/src/assets/property-03.png',
        sales: 50
    },
    {
        name: 'Property 4',
        location: 'North Carolina, USA',
        price: 500,
        img: '/src/assets/property-01.png',
        sales: 35
    },
    {
        name: 'Property 65',
        location: 'North Carolina, USA',
        price: 500,
        img: '/src/assets/property-02.png',
        sales: 50
    },
    {
        name: 'Property 65',
        location: 'North Carolina, USA',
        price: 500,
        img: '/src/assets/property-02.png',
        sales: 50
    },
    {
        name: 'Property 65',
        location: 'North Carolina, USA',
        price: 500,
        img: '/src/assets/property-02.png',
        sales: 50
    },
    {
        name: 'Property 65',
        location: 'North Carolina, USA',
        price: 500,
        img: '/src/assets/property-02.png',
        sales: 50
    },
]


export const topAgentData = [
    {
        name: 'Benny Chagur',
        image: '/src/assets/top-agent-01.png'
    },
    {
        name: 'Chynita Heree',
        image: '/src/assets/top-agent-02.png'
    },
    {
        name: 'David Yers',
        image: '/src/assets/top-agent-03.png'
    },
    {
        name: 'Hayder Jahid',
        image: '/src/assets/top-agent-04.png'
    },
    {
        name: 'Benny Chagur',
        image: '/src/assets/top-agent-01.png'
    },
]

export const exampleNotifData = [
    {
        name: 'Payment Success',
        icon: '/src/assets/payment-success-icon.svg',
        message: 'Your success an order payment from star sun appartment in the amount of $320',
        duration: '10 minutes'
    },
    {
        name: 'Update Apps',
        icon: '/src/assets/update-apps-icon.svg',
        message: 'The Apps application has made updates to improve services',
        duration: '1 Jan'
    },
    {
        name: 'Booking Success',
        icon: '/src/assets/booking-success-icon.svg',
        message: 'You completed the order from star sun hotel and Appartment',
        duration: '16 Sep'
    },
]