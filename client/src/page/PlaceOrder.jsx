import React, { useContext, useState } from 'react'
import { razorpay_logo, stripe_logo } from '../assets'
import CardTotal from '../component/CardTotal'
import Title from '../component/Title'
import { ShopContext } from '../context/ShopCon'

const PlaceOrder = () => {

  const [methoed , setMethoed] = useState('cod');

const {navigate }= useContext(ShopContext);


  return (
    <div className='flex flex-col sm:flex-row justify-around  pt-5 sm:pt-14 min-h-[80vh] '> 

     {/*Left side  */}
    <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

      <div className='text-xl sm:text-2xl my-3'>
        <Title text1={"DELIVER"} text2={"INFORMATION"}/>
      </div>

      <div className='flex gap-3'>
       
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text"  placeholder='First Name'/>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text"  placeholder='Last Name'/>
      </div>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email"  placeholder='Email Address'/>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email"  placeholder='Street'/>

      <div className='flex gap-3'>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text"  placeholder='City'/>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text"  placeholder='State'/>
      </div>

      <div className='flex gap-3'>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number"  placeholder='ZipCode'/>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text"  placeholder='Country'/>
      </div>
      <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="phone"  placeholder='Phone'/>

    </div>

    {/* Right daaaa dubukku */}

    <div className='mt-8 '>
      <div className='mt-8 min-w-80 '>
        <CardTotal/>
      </div>

      <div className='mt-12'>
        <Title text1={"PAYMENT"} text2={"METHOED"}/>
 
   {/*  PAYMENT SELECTION */}
     <div className='flex gap-3 flex-col lg:flex-row'>

      <div onClick={()=>setMethoed('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
        <p className={`min-w-3.5 h-3.5 border rounded-full ${methoed === 'stripe'? 'bg-red-800' : ''}`}>
        </p>
          <img src={stripe_logo} className='h-5 mx-5 ' alt="" />
      </div>

      <div onClick={()=>setMethoed('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
        <p className={`min-w-3.5 h-3.5 border rounded-full ${methoed === 'razorpay'? 'bg-red-800' : ''}`}>
        </p>
          <img src={razorpay_logo} className='h-5 mx-5 ' alt="" />
      </div>

      <div onClick={()=>setMethoed('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
        <p className={`min-w-3.5 h-3.5 border rounded-full ${methoed === 'cod'? 'bg-red-800' : ''}`}>
        </p>
         <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
      </div>

     </div>

     <div className='w-full text-end mt-8'>
      <button
      onClick={()=>navigate('orders')}
      className='bg-black text-white px-16 py-3 text-sm'>PlACE ORDER</button>

     </div>



      </div>
    </div>
      
    </div>
  )
}

export default PlaceOrder
