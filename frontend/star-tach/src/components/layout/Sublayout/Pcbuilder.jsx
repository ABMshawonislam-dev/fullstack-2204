import React from 'react'


// common components here 
import Container from '../../comon/Container'
import Flex from '../../comon/Flex'
import Image from '../../comon/Image'


// react icons here
import { FaHome } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";

import { FaCartArrowDown } from "react-icons/fa";
import { PiComputerTowerFill } from "react-icons/pi";
import { FaPrint } from "react-icons/fa6";
import { BiScreenshot } from "react-icons/bi";

import { BsCpuFill } from "react-icons/bs";


// Image here

import Logo from "../../../assets/Logo.png"




const Pcbuilder = () => {
  return (
    <>
      <section>
          <div className='border border-solid border-[1px] border-full'></div>
              <Container>
                <Flex>
                 <div className='flex text-[#666666] mt-[16px]'>
                <div className='flex pt-[4px]'>
                  <FaHome/>
                  <RxSlash className='ml-[5px]'/>
                </div>
                  <p className='text-[16px] ml-[5px]'>Pc Builder</p>
                 </div>
                </Flex>
             
            
              </Container>
              <div className='border border-solid border-[1px] border-full mt-[16px]'></div>

              <Container>

                <div className='grid  justify-items-center bg-[#F2F4F8]'>


                  <div className='w-[950px] border border-solid border-[1px] bg-[#F9F9FC] mt-[30px]'>
                      <div className='justify-between items-center flex '>
                        <div className='w-[10%]'>
                          <Image src={Logo} className="w-[95px] h-[45px] ml-[30px] mt-[20px]"/>
                          </div>
                        <div className='w-[70%] flex mt-[20px] cursor-pointer pl-[310px]'>
                            <div className='grid  justify-items-center'>
                              <FaCartArrowDown className='text-[24px] text-[#EF4A23]'/>
                              <p className='text-[12px] text-[#666666]'>Add To Cart</p>
                            </div>
                            <div className='border border-solid border-[1px] h-[35px] ml-[20px]'></div>
                            <div className='grid  justify-items-center  ml-[20px]'>
                              <PiComputerTowerFill className='text-[24px] text-[#EF4A23]'/>
                              <p className='text-[12px] text-[#666666]'>Save PC</p>
                            </div>
                            <div className='border border-solid border-[1px] h-[35px] ml-[20px]'></div>
                            <div className='grid  justify-items-center  ml-[20px]'>
                              <FaPrint className='text-[24px] text-[#EF4A23]'/>
                              <p className='text-[12px] text-[#666666]'>Print</p>
                            </div>
                            <div className='border border-solid border-[1px] h-[35px] ml-[15px]'></div>
                            <div className='grid  justify-items-center  ml-[20px]'>
                              <BiScreenshot className='text-[24px] text-[#EF4A23]'/>
                              <p className='text-[12px] text-[#666666]'>Screenshot</p>
                            </div>
                            <div className='border border-solid border-[1px] h-[35px] ml-[20px]'></div>

                        </div>
                        <div className='w-[20%] mt-[20px]'>
                          <button className='cursor-pointer border-[#2C3A96] border-[2px] rounded-[10px] py-[8px] px-[30px] text-[#2C3A96] font-bold hover:bg-[#2C3A96] hover:text-white'> Get A Quote</button>
                        </div>
                      </div>


                      <div className='border border-solid w-full mt-[20px]'></div>




{/*  */}
                      <div className=' grid  justify-items-center mt-[30px]'>
                      <div className='justify-between items-center flex w-[800px] '>
                          <div className='w-[60%]'>
                            <p className='text-[#3749BB] font-semibold'>PC Builder - Build Your Own Computer - Star Tech </p>
                            <div className='flex mt-[10px]'>
                              <input type="checkbox"  className='w-[15px] h-[15px] rounded-[5px] border-black mt-[5px]'/>
                              <label htmlFor="" className='text-[13px] text-[#808996] mt-[2px] ml-[10px]'> Hide Unconfigured Components</label>
                              {/* <div className='border border-solid w-[20px] h-[20px] border-black rounded-[5px]'></div> */}
                              {/* <p className='text-[13px] text-[#808996]'> Hide Unconfigured Components</p> */}
                            </div>
                          </div>
                          <div className='w-[20%]'>
                            <div className='grid justify-items-center relative border rounded-[10px] border-dotted border-[#EF4A23]'>
                              <span className='absolute text-[#3749BB]  text-[10px] top-[5px] right-[8px]'>BETA</span>
                              <div className='py-[5px]  grid justify-items-center'>
                                <h2 className='text-[18px] text-black'>0W</h2>
                                <p className='text-[11px]'>Estimated Wattage</p>
                              </div>
                            </div>
                          </div>
                          <div className='w-[20%] pl-[7px]'>
                            <div className='grid justify-items-center relative border rounded-[10px] border-solid  bg-[#3749BB]'>
                            
                              <div className='py-[5px]  grid justify-items-center'>
                                <h2 className='text-[18px] text-white'>0৳</h2>
                                <p className='text-[11px] text-white'>0 Items</p>
                              </div>
                            </div>
                          </div>
                      </div>
                        <div className='bg-[#808996] w-[800px] text-white text-[12px] mt-[30px] pl-[10px]'>Core Components</div>
                      </div>


                      <div className='  grid  justify-items-center mt-[15px]'>
                          <div className='flex w-[800px]'>
                            <div className='w-[10%] pl-[10px]'>
                                <div className='grid justify-items-center bg-[#F5F6FC] w-[60px] h-[60px] rounded-[8px] content-center'>
                                  <BsCpuFill className='text-[#3749BB] text-[35px]  '/>
                                </div>
                            </div>
                            <div className='w-[65%] pt-[10px]'>
                              <span className='text-[15px] text-[#666666]'>CPU</span>
                              <div className='border border-solid border-[4px] mt-[5px] w-[355px]'></div>
                            </div>
                            <div className='w-[15%]'>
                              <div className='border border-solid border-[4px] w-[85px] mt-[24px]'></div>
                              {/* <div className='border border-solid border-[1px] h-[40px]'></div> */}
                            </div>
                            <div className='w-[10%]'>
                              <button className='border border-solid border-[2px] border-[#2C3A96] text-[#2C3A96] hover:bg-[#2C3A96] hover:text-white font-bold py-[10px] px-[10px] rounded-[8px]'>
                                Choose
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className='grid justify-items-center'>
                        <div className='w-[800px] border border-solid mt-[10px]'></div>
                      </div>

                      <div className='  grid  justify-items-center mt-[15px]'>
                          <div className='flex w-[800px]'>
                            <div className='w-[10%] pl-[10px]'>
                                <div className='grid justify-items-center bg-[#F5F6FC] w-[60px] h-[60px] rounded-[8px] content-center'>
                                  <BsCpuFill className='text-[#3749BB] text-[35px]  '/>
                                </div>
                            </div>
                            <div className='w-[65%] pt-[10px]'>
                              <span className='text-[15px] text-[#666666]'>CPU</span>
                              <div className='border border-solid border-[4px] mt-[5px] w-[355px]'></div>
                            </div>
                            <div className='w-[15%]'>
                              <div className='border border-solid border-[4px] w-[85px] mt-[24px]'></div>
                              {/* <div className='border border-solid border-[1px] h-[40px]'></div> */}
                            </div>
                            <div className='w-[10%]'>
                              <button className='border border-solid border-[2px] border-[#2C3A96] text-[#2C3A96] hover:bg-[#2C3A96] hover:text-white font-bold py-[10px] px-[10px] rounded-[8px]'>
                                Choose
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className='grid justify-items-center'>
                        <div className='w-[800px] border border-solid mt-[10px]'></div>
                      </div>

                      <div className='  grid  justify-items-center mt-[15px]'>
                          <div className='flex w-[800px]'>
                            <div className='w-[10%] pl-[10px]'>
                                <div className='grid justify-items-center bg-[#F5F6FC] w-[60px] h-[60px] rounded-[8px] content-center'>
                                  <BsCpuFill className='text-[#3749BB] text-[35px]  '/>
                                </div>
                            </div>
                            <div className='w-[65%] pt-[10px]'>
                              <span className='text-[15px] text-[#666666]'>CPU</span>
                              <div className='border border-solid border-[4px] mt-[5px] w-[355px]'></div>
                            </div>
                            <div className='w-[15%]'>
                              <div className='border border-solid border-[4px] w-[85px] mt-[24px]'></div>
                              {/* <div className='border border-solid border-[1px] h-[40px]'></div> */}
                            </div>
                            <div className='w-[10%]'>
                              <button className='border border-solid border-[2px] border-[#2C3A96] text-[#2C3A96] hover:bg-[#2C3A96] hover:text-white font-bold py-[10px] px-[10px] rounded-[8px]'>
                                Choose
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className='grid justify-items-center'>
                        <div className='w-[800px] border border-solid mt-[10px]'></div>
                      </div>


                      <div className='  grid  justify-items-center mt-[15px]'>
                          <div className='flex w-[800px]'>
                            <div className='w-[10%] pl-[10px]'>
                                <div className='grid justify-items-center bg-[#F5F6FC] w-[60px] h-[60px] rounded-[8px] content-center'>
                                  <BsCpuFill className='text-[#3749BB] text-[35px]  '/>
                                </div>
                            </div>
                            <div className='w-[65%] pt-[10px]'>
                              <span className='text-[15px] text-[#666666]'>CPU</span>
                              <div className='border border-solid border-[4px] mt-[5px] w-[355px]'></div>
                            </div>
                            <div className='w-[15%]'>
                              <div className='border border-solid border-[4px] w-[85px] mt-[24px]'></div>
                              {/* <div className='border border-solid border-[1px] h-[40px]'></div> */}
                            </div>
                            <div className='w-[10%]'>
                              <button className='border border-solid border-[2px] border-[#2C3A96] text-[#2C3A96] hover:bg-[#2C3A96] hover:text-white font-bold py-[10px] px-[10px] rounded-[8px]'>
                                Choose
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className='grid justify-items-center'>
                        <div className='w-[800px] border border-solid mt-[10px]'></div>
                      </div>

                      <div className='  grid  justify-items-center mt-[15px]'>
                          <div className='flex w-[800px]'>
                            <div className='w-[10%] pl-[10px]'>
                                <div className='grid justify-items-center bg-[#F5F6FC] w-[60px] h-[60px] rounded-[8px] content-center'>
                                  <BsCpuFill className='text-[#3749BB] text-[35px]  '/>
                                </div>
                            </div>
                            <div className='w-[65%] pt-[10px]'>
                              <span className='text-[15px] text-[#666666]'>CPU</span>
                              <div className='border border-solid border-[4px] mt-[5px] w-[355px]'></div>
                            </div>
                            <div className='w-[15%]'>
                              <div className='border border-solid border-[4px] w-[85px] mt-[24px]'></div>
                              {/* <div className='border border-solid border-[1px] h-[40px]'></div> */}
                            </div>
                            <div className='w-[10%]'>
                              <button className='border border-solid border-[2px] border-[#2C3A96] text-[#2C3A96] hover:bg-[#2C3A96] hover:text-white font-bold py-[10px] px-[10px] rounded-[8px]'>
                                Choose
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className='grid justify-items-center'>
                        <div className='w-[800px] border border-solid mt-[10px]'></div>
                      </div>


                      <div className='  grid  justify-items-center mt-[15px]'>
                          <div className='flex w-[800px]'>
                            <div className='w-[10%] pl-[10px]'>
                                <div className='grid justify-items-center bg-[#F5F6FC] w-[60px] h-[60px] rounded-[8px] content-center'>
                                  <BsCpuFill className='text-[#3749BB] text-[35px]  '/>
                                </div>
                            </div>
                            <div className='w-[65%] pt-[10px]'>
                              <span className='text-[15px] text-[#666666]'>CPU</span>
                              <div className='border border-solid border-[4px] mt-[5px] w-[355px]'></div>
                            </div>
                            <div className='w-[15%]'>
                              <div className='border border-solid border-[4px] w-[85px] mt-[24px]'></div>
                              {/* <div className='border border-solid border-[1px] h-[40px]'></div> */}
                            </div>
                            <div className='w-[10%]'>
                              <button className='border border-solid border-[2px] border-[#2C3A96] text-[#2C3A96] hover:bg-[#2C3A96] hover:text-white font-bold py-[10px] px-[10px] rounded-[8px]'>
                                Choose
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className='grid justify-items-center'>
                        <div className='w-[800px] border border-solid mt-[10px]'></div>
                      </div>


                      <div className='  grid  justify-items-center mt-[15px]'>
                          <div className='flex w-[800px]'>
                            <div className='w-[10%] pl-[10px]'>
                                <div className='grid justify-items-center bg-[#F5F6FC] w-[60px] h-[60px] rounded-[8px] content-center'>
                                  <BsCpuFill className='text-[#3749BB] text-[35px]  '/>
                                </div>
                            </div>
                            <div className='w-[65%] pt-[10px]'>
                              <span className='text-[15px] text-[#666666]'>CPU</span>
                              <div className='border border-solid border-[4px] mt-[5px] w-[355px]'></div>
                            </div>
                            <div className='w-[15%]'>
                              <div className='border border-solid border-[4px] w-[85px] mt-[24px]'></div>
                              {/* <div className='border border-solid border-[1px] h-[40px]'></div> */}
                            </div>
                            <div className='w-[10%]'>
                              <button className='border border-solid border-[2px] border-[#2C3A96] text-[#2C3A96] hover:bg-[#2C3A96] hover:text-white font-bold py-[10px] px-[10px] rounded-[8px]'>
                                Choose
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className='grid justify-items-center'>
                        <div className='w-[800px] border border-solid mt-[10px]'></div>
                      </div>


                      <div className='  grid  justify-items-center mt-[15px]'>
                          <div className='flex w-[800px]'>
                            <div className='w-[10%] pl-[10px]'>
                                <div className='grid justify-items-center bg-[#F5F6FC] w-[60px] h-[60px] rounded-[8px] content-center'>
                                  <BsCpuFill className='text-[#3749BB] text-[35px]  '/>
                                </div>
                            </div>
                            <div className='w-[65%] pt-[10px]'>
                              <span className='text-[15px] text-[#666666]'>CPU</span>
                              <div className='border border-solid border-[4px] mt-[5px] w-[355px]'></div>
                            </div>
                            <div className='w-[15%]'>
                              <div className='border border-solid border-[4px] w-[85px] mt-[24px]'></div>
                              {/* <div className='border border-solid border-[1px] h-[40px]'></div> */}
                            </div>
                            <div className='w-[10%]'>
                              <button className='border border-solid border-[2px] border-[#2C3A96] text-[#2C3A96] hover:bg-[#2C3A96] hover:text-white font-bold py-[10px] px-[10px] rounded-[8px]'>
                                Choose
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className='grid justify-items-center'>
                        <div className='w-[800px] border border-solid mt-[10px]'></div>
                      </div>

                    <div className='grid justify-items-center'>

                      <div className='bg-[#808996] w-[800px] text-white text-[12px]  pl-[10px]'>Peripherals & Others</div>
                    </div>
                      

                    <div className='  grid  justify-items-center mt-[15px]'>
                          <div className='flex w-[800px]'>
                            <div className='w-[10%] pl-[10px]'>
                                <div className='grid justify-items-center bg-[#F5F6FC] w-[60px] h-[60px] rounded-[8px] content-center'>
                                  <BsCpuFill className='text-[#3749BB] text-[35px]  '/>
                                </div>
                            </div>
                            <div className='w-[65%] pt-[10px]'>
                              <span className='text-[15px] text-[#666666]'>CPU</span>
                              <div className='border border-solid border-[4px] mt-[5px] w-[355px]'></div>
                            </div>
                            <div className='w-[15%]'>
                              <div className='border border-solid border-[4px] w-[85px] mt-[24px]'></div>
                              {/* <div className='border border-solid border-[1px] h-[40px]'></div> */}
                            </div>
                            <div className='w-[10%]'>
                              <button className='border border-solid border-[2px] border-[#2C3A96] text-[#2C3A96] hover:bg-[#2C3A96] hover:text-white font-bold py-[10px] px-[10px] rounded-[8px]'>
                                Choose
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className='grid justify-items-center'>
                        <div className='w-[800px] border border-solid mt-[10px]'></div>
                      </div>


                      <div className='  grid  justify-items-center mt-[15px]'>
                          <div className='flex w-[800px]'>
                            <div className='w-[10%] pl-[10px]'>
                                <div className='grid justify-items-center bg-[#F5F6FC] w-[60px] h-[60px] rounded-[8px] content-center'>
                                  <BsCpuFill className='text-[#3749BB] text-[35px]  '/>
                                </div>
                            </div>
                            <div className='w-[65%] pt-[10px]'>
                              <span className='text-[15px] text-[#666666]'>CPU</span>
                              <div className='border border-solid border-[4px] mt-[5px] w-[355px]'></div>
                            </div>
                            <div className='w-[15%]'>
                              <div className='border border-solid border-[4px] w-[85px] mt-[24px]'></div>
                              {/* <div className='border border-solid border-[1px] h-[40px]'></div> */}
                            </div>
                            <div className='w-[10%]'>
                              <button className='border border-solid border-[2px] border-[#2C3A96] text-[#2C3A96] hover:bg-[#2C3A96] hover:text-white font-bold py-[10px] px-[10px] rounded-[8px]'>
                                Choose
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className='grid justify-items-center'>
                        <div className='w-[800px] border border-solid mt-[10px]'></div>
                      </div>



                      <div className='  grid  justify-items-center mt-[15px]'>
                          <div className='flex w-[800px]'>
                            <div className='w-[10%] pl-[10px]'>
                                <div className='grid justify-items-center bg-[#F5F6FC] w-[60px] h-[60px] rounded-[8px] content-center'>
                                  <BsCpuFill className='text-[#3749BB] text-[35px]  '/>
                                </div>
                            </div>
                            <div className='w-[65%] pt-[10px]'>
                              <span className='text-[15px] text-[#666666]'>CPU</span>
                              <div className='border border-solid border-[4px] mt-[5px] w-[355px]'></div>
                            </div>
                            <div className='w-[15%]'>
                              <div className='border border-solid border-[4px] w-[85px] mt-[24px]'></div>
                              {/* <div className='border border-solid border-[1px] h-[40px]'></div> */}
                            </div>
                            <div className='w-[10%]'>
                              <button className='border border-solid border-[2px] border-[#2C3A96] text-[#2C3A96] hover:bg-[#2C3A96] hover:text-white font-bold py-[10px] px-[10px] rounded-[8px]'>
                                Choose
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className='grid justify-items-center'>
                        <div className='w-[800px] border border-solid mt-[10px]'></div>
                      </div>



                      <div className='  grid  justify-items-center mt-[15px]'>
                          <div className='flex w-[800px]'>
                            <div className='w-[10%] pl-[10px]'>
                                <div className='grid justify-items-center bg-[#F5F6FC] w-[60px] h-[60px] rounded-[8px] content-center'>
                                  <BsCpuFill className='text-[#3749BB] text-[35px]  '/>
                                </div>
                            </div>
                            <div className='w-[65%] pt-[10px]'>
                              <span className='text-[15px] text-[#666666]'>CPU</span>
                              <div className='border border-solid border-[4px] mt-[5px] w-[355px]'></div>
                            </div>
                            <div className='w-[15%]'>
                              <div className='border border-solid border-[4px] w-[85px] mt-[24px]'></div>
                              {/* <div className='border border-solid border-[1px] h-[40px]'></div> */}
                            </div>
                            <div className='w-[10%]'>
                              <button className='border border-solid border-[2px] border-[#2C3A96] text-[#2C3A96] hover:bg-[#2C3A96] hover:text-white font-bold py-[10px] px-[10px] rounded-[8px]'>
                                Choose
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className='grid justify-items-center'>
                        <div className='w-[800px] border border-solid mt-[10px]'></div>
                      </div>



                      <div className='  grid  justify-items-center mt-[15px]'>
                          <div className='flex w-[800px]'>
                            <div className='w-[10%] pl-[10px]'>
                                <div className='grid justify-items-center bg-[#F5F6FC] w-[60px] h-[60px] rounded-[8px] content-center'>
                                  <BsCpuFill className='text-[#3749BB] text-[35px]  '/>
                                </div>
                            </div>
                            <div className='w-[65%] pt-[10px]'>
                              <span className='text-[15px] text-[#666666]'>CPU</span>
                              <div className='border border-solid border-[4px] mt-[5px] w-[355px]'></div>
                            </div>
                            <div className='w-[15%]'>
                              <div className='border border-solid border-[4px] w-[85px] mt-[24px]'></div>
                              {/* <div className='border border-solid border-[1px] h-[40px]'></div> */}
                            </div>
                            <div className='w-[10%]'>
                              <button className='border border-solid border-[2px] border-[#2C3A96] text-[#2C3A96] hover:bg-[#2C3A96] hover:text-white font-bold py-[10px] px-[10px] rounded-[8px]'>
                                Choose
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className='grid justify-items-center'>
                        <div className='w-[800px] border border-solid mt-[10px]'></div>
                      </div>



                      <div className='  grid  justify-items-center mt-[15px]'>
                          <div className='flex w-[800px]'>
                            <div className='w-[10%] pl-[10px]'>
                                <div className='grid justify-items-center bg-[#F5F6FC] w-[60px] h-[60px] rounded-[8px] content-center'>
                                  <BsCpuFill className='text-[#3749BB] text-[35px]  '/>
                                </div>
                            </div>
                            <div className='w-[65%] pt-[10px]'>
                              <span className='text-[15px] text-[#666666]'>CPU</span>
                              <div className='border border-solid border-[4px] mt-[5px] w-[355px]'></div>
                            </div>
                            <div className='w-[15%]'>
                              <div className='border border-solid border-[4px] w-[85px] mt-[24px]'></div>
                              {/* <div className='border border-solid border-[1px] h-[40px]'></div> */}
                            </div>
                            <div className='w-[10%]'>
                              <button className='border border-solid border-[2px] border-[#2C3A96] text-[#2C3A96] hover:bg-[#2C3A96] hover:text-white font-bold py-[10px] px-[10px] rounded-[8px]'>
                                Choose
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className='grid justify-items-center'>
                        <div className='w-[800px] border border-solid mt-[10px]'></div>
                      </div>



                      <div className='  grid  justify-items-center mt-[15px]'>
                          <div className='flex w-[800px]'>
                            <div className='w-[10%] pl-[10px]'>
                                <div className='grid justify-items-center bg-[#F5F6FC] w-[60px] h-[60px] rounded-[8px] content-center'>
                                  <BsCpuFill className='text-[#3749BB] text-[35px]  '/>
                                </div>
                            </div>
                            <div className='w-[65%] pt-[10px]'>
                              <span className='text-[15px] text-[#666666]'>CPU</span>
                              <div className='border border-solid border-[4px] mt-[5px] w-[355px]'></div>
                            </div>
                            <div className='w-[15%]'>
                              <div className='border border-solid border-[4px] w-[85px] mt-[24px]'></div>
                              {/* <div className='border border-solid border-[1px] h-[40px]'></div> */}
                            </div>
                            <div className='w-[10%]'>
                              <button className='border border-solid border-[2px] border-[#2C3A96] text-[#2C3A96] hover:bg-[#2C3A96] hover:text-white font-bold py-[10px] px-[10px] rounded-[8px]'>
                                Choose
                              </button>
                            </div>
                          </div>
                      </div>
                      <div className='grid justify-items-center'>
                        <div className='w-[800px] border border-solid mt-[10px]'></div>
                      </div>


                     


                  </div>
                </div>
                </Container>
              
          </section>
       
    </>
  )
}

export default Pcbuilder