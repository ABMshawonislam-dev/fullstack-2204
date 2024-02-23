import React from 'react'


// image 
import Logo from '../../assets/Logo.png'

// common
import Button from '../comon/Button.jsx'
import Container from '../comon/Container.jsx'
import Flex from '../comon/Flex.jsx'
import Image from '../comon/Image.jsx'


// react icon 
import { FaSearch } from "react-icons/fa";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { IoMdFlash } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";


// react router dom
import { Link } from 'react-router-dom'



const Topnav = () => {
  return (
    <>
    <section className='w-full bg-[#081621] py-[15px]'>
      <Container>
        <Flex className="justify-between items-center">
          <div className='w-[10%]'>
          <Image src={Logo} alt={Logo} className="w-[115px] h-[50px]"/>
          </div>
          <div className='w-[80%] flex'>
           <div className='ml-[40px]'>
            <label className='relative'>
            <input type="text"  placeholder='    Search'  className='w-[580px] h-[38px] rounded-[5px]'/>
            <span className='absolute inset-y-0 left-[540px]'><FaSearch/></span>
            </label>
           </div>
           <div className='text-white pl-[30px] flex'>
            <MdOutlineCardGiftcard className='w-[22px] h-[22px] text-[#EF4A23] mt-[10px]'></MdOutlineCardGiftcard>
            <div className='pl-[14px]'>
                <h3 className=''>Offers</h3>
                <p className='text-[12px] text-[#708B89] mt-[-3px]'>Latest Offers</p>
            </div>
           </div>
           <div className='text-white pl-[30px] flex'>
            <IoMdFlash className='w-[22px] h-[22px] text-[#EF4A23] mt-[10px]'></IoMdFlash>
            <div className='pl-[14px]'>
                <h3 className=''>JBL WEEK</h3>
                <p className='text-[12px] text-[#708B89] mt-[-3px]'>Special Deal</p>
            </div>
           </div>
           <div className='text-white pl-[30px] flex'>
            <IoMdPerson className='w-[22px] h-[22px] text-[#EF4A23] mt-[10px]'></IoMdPerson>
            <div className='pl-[14px]'>
                <h3 className=''>Account</h3>
                <p className='text-[12px] text-[#708B89] mt-[-3px]'>Register or Login</p>
            </div>
           </div>
          </div>
          <div className='w-[10%]'>

          <Link to="/Pc Builder">
              <button className='ml-[21px] py-[10px] px-[20px] bg-[#23539F] rounded-[5px] text-white font-bold text-sm border border-solid border-black hover:bg-[#23539F] hover:text-white duration-500'>PC Builder</button>      
           </Link>
            
          </div>
        </Flex>
      </Container>
    </section>
    </>
  )
}

export default Topnav