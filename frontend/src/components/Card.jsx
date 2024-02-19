import React from 'react'
import pc from "../assets/pc.webp"

const Card = () => {
  return (
    <div>
         <div className='w-[320px] bg-white rounded-md shadow-xl mt-2'>
            <p className='bg-[#6E2594] w-36 rounded-r-full font-pop font-normal text-white text-xs px-2 py-0.5'>Save: 2,351BDT</p>
            <img src={pc} className="w-full" />
            <div className='p-4'>
                <h1 className='font-roboto font-medium text-lg text-primary'>AMD Ryzen 5 2400G Budget Gaming Desktop PC</h1>
                <div className="flex justify-between items-center">
                    <p className='font-medium text-base text-orange-500 mt-4 flex items-center gap-x-4 '>23,999BDT <span className='text-sm text-black line-through'>26,350BDT</span></p>
                    
                </div>

            </div>

        </div>
    </div>
  )
}

export default Card