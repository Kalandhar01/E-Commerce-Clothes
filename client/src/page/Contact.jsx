import React from 'react'
import { contact_img } from '../assets'
import News from '../component/News'
import Title from '../component/Title'

const Contact = () => {
  return (
    <div>
    <div className=' text-center text-2xl pt-10 border-t'>
      <Title  text1={"CONTACT"} text2={"US"}/>
    </div>

    <div className='flex my-10 flex-col justify-center md:flex-row gap-10 mb-28'>
      <img src={contact_img} alt="" className='w-full md:max-w-[420px]' />
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-clip text-gray-600'> Our Store</p>
        <p className='text-gray-500'>9786 New Street <br /> MiMisal ,PuthuKottai ,Tamil Nadu</p>

        <p className='text-gray-500'>Phone : +91 9025679255 <br />Kalandhar@gmail.com</p>

        <p className='font-semibold text-xl text-gray-500'> Carees At Male Fashion</p>
        <p className='text-gray-500'>Learn More about Our teams and job Openings</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore All</button>
      </div> 
    </div>
    <News/>

    </div>
  )
}

export default Contact
