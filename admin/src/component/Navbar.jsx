import React from 'react'
import { logomain } from '../assets/assets'
const Navbar = ({setToken}) => {
  return (
    <>
    <div className=' flex items-center justify-between py-2 px-[4%]'>
        <img src={logomain} alt="" className='[max(10%,80px)]'/>
        <button
         onClick={()=>setToken('')} 
        className='bg-gray-600 text-white px-5 py-2 mt-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'> LogOut</button>
    </div>
    </>
  )
}

export default Navbar