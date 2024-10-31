import React from 'react';

const News = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();


    }



  return (
    <>
      <div className='text-center'>

        <p className='text-2xl font-medium text-gray-800'>Subscribe Now & Get 20% off </p>
        <p className='text-gray-400 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>

        <form className='w-full sm:w-1/2 flex items-center  gap-3 mx-auto my-6 border pl-3 '>
            <input type="email" placeholder='Enter your Email' className='w-full sm:flex-1 outline-none' required />
            <button className='bg-black text-white text-xs px-10 py-4'>SubMit</button>
        </form>

      </div>
    </>
  )
}

export default News