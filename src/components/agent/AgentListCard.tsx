

export default function AgentListCard() {
  return (
    <div className='flex gap-4'>
          <img src="person-01.png" alt="" />
          <div className='flex-1'>
            <div className='flex justify-between'>
              <div className='text-2xl font-bold'>Karen Eilla Boyette</div>
              <img src="three-dot-horizontal-icon.svg" alt="" />
            </div>
            <div className='my-2'>Real-Estate Agent</div>
            <div className='grid grid-cols-2 gap-24 mt-10 w-[600px]'>
              <div className='flex gap-4'>
                <img src="message-icon.svg" alt="" />
                <div>karenboyette@armyspy.com</div>
              </div>
              <div className='flex gap-4'>
                <img src="location-icon.svg" alt="" />
                <div>Manchester</div>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-24 mt-5 w-[600px]'>
              <div className='flex gap-4'>
                <img src="phone-icon.svg" alt="" />
                <div>+502-324-4194</div>
              </div>
              <div className='flex gap-4'>
                <img src="building-icon.svg" alt="" />
                <div>15 properties</div>
              </div>
            </div>
          </div>
        </div>
  )
}
