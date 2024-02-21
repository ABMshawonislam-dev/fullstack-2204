import React from 'react'

// commonn components here 
import Container from '../comon/Container'

// react icons here 
import { GrVirtualMachine } from "react-icons/gr";
import { GiDeliveryDrone } from "react-icons/gi";
import { GiSewingMachine } from "react-icons/gi";
import { BsBatteryCharging } from "react-icons/bs";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { IoIosPhonePortrait } from "react-icons/io";
import { FaToiletPortable } from "react-icons/fa6";
import { PiVirtualRealityLight } from "react-icons/pi";
import { IoWatch } from "react-icons/io5";
import { FaCameraRetro } from "react-icons/fa";
import { BsGpuCard } from "react-icons/bs";
import { FiPrinter } from "react-icons/fi";
import { FaHeadphones } from "react-icons/fa";
import { BsEarbuds } from "react-icons/bs";
import { FaBluetooth } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";

const Cetagory = () => {
  return (
    <>
    <section className='bg-[#F2F4F8] pt-[54px]'>
        <Container>
          <div className='text-center'>
            <h2 className='font-medium'>Featured Category</h2>
            <p>Get Your Desired Product from Featured Category!</p>
          </div>


          <div className='justify-between items-center flex pt-[30px]'>
          <div className='flex gap-x-[17px]'>
          <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <GrVirtualMachine className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>Home Appliances</p>
               </div>
            </div>
            <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <GiDeliveryDrone className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>Drone</p>
               </div>
            </div>
            <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <GiSewingMachine className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>Gimbal</p>
               </div>
            </div>
            <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <BsBatteryCharging className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>Battery for Laptop</p>
               </div>
            </div>
            <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <PiTelevisionSimpleLight className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>TV</p>
               </div>
            </div>
            <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <IoIosPhonePortrait className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>Mobile Phone</p>
               </div>
            </div>
            <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <FaToiletPortable className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>Portable Power Station</p>
               </div>
            </div>
            <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <PiVirtualRealityLight className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>VR (Virtual Reality)</p>
               </div>
            </div>
            <div>
            </div>
          </div>
          </div>


          <div className='justify-between items-center flex pt-[40px]'>
          <div className='flex gap-x-[17px]'>
          <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <IoWatch className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>Smart Watch</p>
               </div>
            </div>
            <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <FaCameraRetro className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>Action Camera</p>
               </div>
            </div>
            <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <BsGpuCard className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>Graphics Card</p>
               </div>
            </div>
            <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <FiPrinter className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>Printer</p>
               </div>
            </div>
            <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <FaHeadphones className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>Headphone</p>
               </div>
            </div>
            <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <BsEarbuds className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>Earbuds</p>
               </div>
            </div>
            <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <FaBluetooth className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>Bluetooth Speaker </p>
               </div>
            </div>
            <div className='w-[150px] h-[132px] bg-[#fff] rounded-[10px] flex items-center justify-center'>
               <div className='text-center'>
                <GiGamepad className='ml-[40px] text-[40px] text-[#253B51]'/>
                <p className='pt-[20px] text-[16px] hover:text-[#F37223]'>Gaming Console</p>
               </div>
            </div>
            <div>
            </div>
            <div>
            </div>
          </div>
          </div>
          <div></div>
        </Container>
    </section>
    </>
  )
}

export default Cetagory