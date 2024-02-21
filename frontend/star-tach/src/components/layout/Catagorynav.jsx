import React from 'react'

// common components 
import Container from "../comon/Container.jsx"
import Flex from "../comon/Flex.jsx"



const Catagorynav = () => {
  return (
    <>
   <nav className='bg-[#FFFFFF] py-[15px]'>
   <Container>
      <Flex>
        <ul className='flex justify-between items-center font-medium gap-x-[21px] text-[13px]'>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Desktop</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Laptop</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Components</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Monitor</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>UPS</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Phone</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Tablet</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Office Equipment</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Camera</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Security</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Networking</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Software</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Server & Storage</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Accessories</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Gadget</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Gaming</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>TV</li>
          <li className='hover:text-[#EF4A23] cursor-pointer'>Appliance</li>
        </ul>
      </Flex>
    </Container>
   </nav>
    </>
  )
}

export default Catagorynav