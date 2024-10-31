import React from 'react'

const Title = ({ text1, text2}) => {
  return (
    <div className='inline-flex gap-2 items-center mb-3 max-sm:w-full max-sm:mt-5' >
        <p className='text-gray-500 max-sm:pl-7 max-sm:text-[39px] max-sm:py-2'>{text1} 
            <span className='text-gray-700 font-medium'> {text2}</span>
        </p>

        <p className='w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700'></p>
    </div>
  )
}

export default Title