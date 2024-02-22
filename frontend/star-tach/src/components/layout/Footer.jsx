import React from 'react'


// common components here 
import Container from '../comon/Container'
import Flex from '../comon/Flex'


// icons here
import { FaPhone } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
        <section className='bg-[#081621] mt-[65px]'>
            <Container>
                <Flex className="pt-[50px]">
                    <div className='w-[25%]'>
                        <h2 className='text-white tracking-[5px] text-[14px]'>SUPPORT</h2>
                        <div>
                            <button className='border border-solid border-[#7B8986] hover:border-[#EF4A23] rounded-[30px] flex text-white w-[270px] mt-[33px]'>
                                <div className='py-[10px] px-[25px] flex'>
                                    <div className='mt-[12px]'>
                                         <FaPhone className='text-white text-[20px]'/>
                                    </div>
                                    <div className='border border-solid border-[1px] border-[#2C3136] ml-[15px]'></div>
                                    <div className='ml-[15px]'>
                                        <p className='text-[12px] pl-[18px] text-[#7B8986]'>10AM - 7AM</p>
                                        <h4 className='text-[18px] text-[#EF4A23]'> 16793</h4>
                                    </div>
                                </div>
                            </button>
                            <button className='border border-solid border-[#7B8986] hover:border-[#EF4A23] rounded-[30px] flex text-white w-[270px] mt-[20px]'>
                                <div className='py-[10px] px-[25px] flex'>
                                    <div className='mt-[12px]'>
                                         <CiLocationOn className='text-white text-[20px]'/>
                                    </div>
                                    <div className='border border-solid border-[1px] border-[#2C3136] ml-[15px]'></div>
                                    <div className='pl-[28px]'>
                                        <p className='text-[12px] ml-[-35px]  text-[#7B8986]'>Store Location </p>
                                        <h4 className='text-[18px] text-[#EF4A23]'>Find Our Store </h4>
                                    </div>
                                </div>
                            </button>
                        </div>

                    </div>

                    <div className='w-[50%]'>
                        <h2 className='text-white tracking-[5px] text-[14px]'>ABOUT US</h2>
                       <div className='flex justify-between items-center'>
                       <ul className='text-[#7B8986] text-[14px] pt-[33px] w-[33%] '>
                            <li className='hover:text-[#EF3521]'>EMI Terms</li>
                            <li className='hover:text-[#EF3521] pt-[22px]'>Privacy Policy</li>
                            <li className='hover:text-[#EF3521] pt-[22px]'>Star Point Policy</li>
                            <li className='hover:text-[#EF3521] pt-[22px]'>Brands</li>
                        </ul>
                       <ul className='text-[#7B8986] text-[14px] w-[33%] '>
                            <li className='hover:text-[#EF3521]'>About Us</li>
                            <li className='hover:text-[#EF3521] pt-[22px]'> Terms and Conditions</li>
                            <li className='hover:text-[#EF3521] pt-[22px]'> Blog</li>
                        </ul>
                       <ul className='text-[#7B8986] text-[14px] w-[33%] '>
                            <li className='hover:text-[#EF3521]'>Online Delivery</li>
                            <li className='hover:text-[#EF3521] pt-[22px]'> Refund and Return Policy</li>
                            <li className='hover:text-[#EF3521] pt-[22px]'> Contact Us</li>
                            
                        </ul>
                       </div>
                    </div>


                    <div className='w-[25%]'>
                        <h2 className='text-white tracking-[5px] text-[14px]'>STAY CONNECTED</h2>
                        <div className='mt-[33px]'>
                            <ul className='text-[14px] text-[#7B8986]'>
                                <li className='text-[#fff]'>Star Tech Ltd</li>
                                <li className='pt-[10px]'>Head Office: 28 Kazi Nazrul Islam  <br /> Ave,Navana Zohura Square, Dhaka 1000</li>
                                <li className='pt-[10px]'>Email:</li>
                                <li className='text-[#EF3521] pt-[10px]'>webteam@startechbd.com</li>
                            </ul>
                        </div>
                    </div>

                    
                </Flex> 
                <div className='w-full border-[#63818D] border-solid border-[1px] mt-[40px]'></div>
                <div className='flex'>
                   <div>
                   <p className='text-[#63818D] text-[12px] pt-[22px]'>Experience Star Tech App on your mobile:</p>
                   </div>
                   <div className='flex pt-[15px] justify-between items-center'>
                        <div className='w-[140px] border border-solid border-[#63818D] ml-[25px] rounded-[15px] hover:border-[#fff] flex'>
                            <IoLogoGooglePlaystore  className='text-white text-[25px] my-[10px] mx-[10px]'/>
                            <div className='pt-[5px]'>
                                <p className='text-[10px] text-[#63818D]'>Download On </p>
                                <p className='text-[14px] text-white'>Google Play</p>
                            </div>
                        </div>
                        <div className='w-[140px] border border-solid border-[#63818D] rounded-[15px] ml-[25px] hover:border-[#fff] flex'>
                            <FaAppStore className='text-white text-[25px] my-[10px] mx-[10px]'/>
                            <div  className='pt-[5px]'>
                                <p className='text-[10px] text-[#63818D]'>Download On </p>
                                <p className='text-[14px] text-white'>Google Play</p>
                            </div>
                        </div>
                        <div className='flex items-end ml-[635px]'>
                           <div className='w-[35px] h-[35px] bg-[#63818D] rounded-[50px] relative hover:bg-[#3749BB] '>
                           <FaFacebookF className='absolute text-white top-[9px] left-[9px]'/>
                           </div>
                            <div className='w-[35px] h-[35px] bg-[#63818D] rounded-[50px] relative hover:bg-[#3749BB] ml-[10px]'>
                            <FaYoutube className='absolute text-white top-[9px] left-[9px]'/>
                            </div>
                            <div className='w-[35px] h-[35px] bg-[#63818D] rounded-[50px] relative hover:bg-[#3749BB] ml-[10px]'>
                            <FaInstagram className='absolute text-white top-[9px] left-[9px]'/>
                            </div>
                        </div>
                   </div>
                </div>
                <div className='w-full border-[#63818D] border-solid border-[1px] mt-[20px]'></div>
                <p className='pt-[22px] text-[12px] text-[#63818D] pb-[22px]'>© 2023 Star Tech Ltd | All rights reserved</p>
            </Container>
        </section>
    </>
  )
}

export default Footer