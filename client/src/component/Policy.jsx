import React from 'react'
import { exchange_icon, quality_icon, support_img } from '../assets'

const Policy = () => {
  return (
    <>
    <div className='flex flex-col sm:flex justify-around gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>

        <div >
            <img src={exchange_icon} alt=""
            className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Exchange Policy Policy</p>
            <p className='text-gray-400'>We Offer Hassle free exchange policy</p>
        </div>

        <div >
            <img src={quality_icon} alt=""
            className='w-12 m-auto mb-5' />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We Provide the 7 days free return Policy</p>
        </div>

        <div >
            <img src={support_img} alt=""
            className='w-10 m-auto mb-5' />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We Provide The 24/7 customer Support</p>
        </div>
    </div>
      
    </>
  )
}

export default Policy
