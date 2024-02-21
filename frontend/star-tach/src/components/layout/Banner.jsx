import React from 'react'

// common components
import Container from '../comon/Container'
import Flex from '../comon/Flex'
import Image from '../comon/Image'
// image
import Bannar1 from "../../assets/banner.png"
import LaptopFinder from "../../assets/laptopfinder.webp"

// react icon here 
import { FaSearch } from "react-icons/fa";


const Banner = () => {
  return (
    <>
    <section className=' bg-[#F2F4F8]'>
        <Container>
            <div className="gap-x-[30px] flex">
                <div className='w-[77%] mt-[30px]'>
                    <Image src={Bannar1} className="w-full"/>
                </div>
                <div className='w-[23%] mt-[30px]'>
                    <div className='bg-[#FFE8A1]'>
                        <h6 className='font-medium pt-[30px] text-center'>Compare Products</h6>
                        <p className='text-[#A39467] text-center'>Choose tow Products to Compare </p>
                       <div className='mt-[20px]'>
                       <label className='relative text-center pl-[25px] mt-[20px]' >
                            <input type="text"  placeholder='   Search and Select Products'  className='w-[240px] h-[40px] rounded-[5px] placeholder:text-[14px]'/>
                            <span className='absolute left-[237px] pt-[12px]  text-[#A39467]'><FaSearch/></span>
                        </label>
                       </div>
                       <div className='mt-[15px]'>
                       <label className='relative text-center pl-[25px] mt-[20px]' >
                            <input type="text"  placeholder='   Search and Select Products'  className='w-[240px] h-[40px] rounded-[5px] placeholder:text-[14px]'/>
                            <span className='absolute left-[237px] pt-[12px] text-[#A39467]'><FaSearch/></span>
                        </label>
                       </div>
                       <div className='pl-[25px] mt-[15px] pb-[30px]'>
                        <button className=' border border-solid border-[#2C3A96] py-[8px] px-[58px] text-[#2C3A96]  hover:bg-[#2C3A96] hover:text-[#fff]  '>View Comparison</button>
                        {/* <button className='absolute border border-solid border-[#2C3A96] py-[8px] px-[58px] text-[#2C3A96] before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:original-top-left before:scale-y-0 before:bg-[#2C3A96] before:transition-transform before:duration-300 before:content-[""] before:hover:text-white before:hover:scale-y-100' >View Comparison</button> */}
                       </div>
                    </div>
                   <div className='mt-[35px]'>
                   <Image className="h-[190px] w-[300px]" src={LaptopFinder}/>
                   </div>
                </div>
            </div>
        </Container>
    </section>
    </>
  )
}

// hover:bg-[#2C3A96] hover:text-[#fff]

export default Banner