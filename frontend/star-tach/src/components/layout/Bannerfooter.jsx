import React from 'react'

// common components here 
import Container from '../comon/Container'
import Flex from '../comon/Flex'



// react icons here 
import { CiLaptop } from "react-icons/ci";
import { BiMessageError } from "react-icons/bi";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";


const Bannerfooter = () => {
  return (
    <>
    <section className='bg-[#F2F4F8] pt-[65px]'>
        <Container>
            <Flex className="justify-between items-center">
                <div className='flex relative bg-[#fff] py-[15px] pl-[25px] pr-[45px] rounded-[5px] shadow-sm shadow-[#333]'>
                    <div className='bg-[#EF4A23] absolute h-[42px] w-[42px] rounded-[50%] cursor-pointer'>
                    <CiLaptop className='top-[11px] left-[12px] text-[20px] text-[#fff] absolute'/>
                    </div>
                    <div className='pl-[70px]'>
                        <h2 className='font-medium'>Laptop Finder</h2>
                        <p className='text-[14px]'>Find Your Laptop Easily</p>
                    </div>
                </div>

                <div className='flex relative bg-[#fff] py-[15px] pl-[25px] pr-[45px] rounded-[5px] shadow-sm shadow-[#333]'>
                    <div className='bg-[#EF4A23] absolute h-[42px] w-[42px] rounded-[50%] cursor-pointer'>
                    <BiMessageError className='top-[11px] left-[12px] text-[20px] text-[#fff] absolute'/>
                    </div>
                    <div className='pl-[70px]'>
                        <h2 className='font-medium'>Raise and Complain </h2>
                        <p className='text-[14px]'>Share Your Experience </p>
                    </div>
                </div>

                 <div className='flex relative bg-[#fff] py-[15px] pl-[25px] pr-[45px] rounded-[5px] shadow-sm shadow-[#333]'>
                    <div className='bg-[#EF4A23] absolute h-[42px] w-[42px] rounded-[50%] cursor-pointer'>
                    <MdOutlineContactSupport className='top-[11px] left-[12px] text-[20px] text-[#fff] absolute'/>
                    </div>
                    <div className='pl-[70px]'>
                        <h2 className='font-medium'>Online Support </h2>
                        <p className='text-[14px]'>Get Online Support</p>
                    </div>
                </div>

                 <div className='flex relative bg-[#fff] py-[15px] pl-[25px] pr-[45px] rounded-[5px] shadow-sm shadow-[#333]'>
                    <div className='bg-[#EF4A23] absolute h-[42px] w-[42px] rounded-[50%] cursor-pointer'>
                    <IoSettingsOutline className='top-[11px] left-[12px] text-[20px] text-[#fff] absolute'/>
                    </div>
                    <div className='pl-[70px]'>
                        <h2 className='font-medium'>Servicing Center</h2>
                        <p className='text-[14px]'>Repaire Your Device</p>
                    </div>
                </div>
            </Flex>
        </Container>
    </section>
    </>
  )
}

export default Bannerfooter