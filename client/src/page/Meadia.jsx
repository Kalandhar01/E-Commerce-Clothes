import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { im1, im2, im3, im4, im5, im6 } from '../assets';

const images = [im1, im2, im3, im4, im5, im6]; 

const Media = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='flex gap-5 w-full h-full max-sm:flex-col max-sm:h-auto mt-20 max-sm:gap-5 mb-10 max-sm:mb-5'>
      {/* Left side: Image content */}
      <div className='w-[50%] h-[70%] pt-10 ml-20 max-sm:w-full max-sm:m-0 max-sm:h-full'>
        <motion.div
          key={currentIndex} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }} 
          transition={{ duration: 1 }} 
        >
          <img 
            src={images[currentIndex]} 
            alt={`Image ${currentIndex + 1}`} 
            className='w-[30rem] h-[25rem] max-sm:w-full max-sm:h-[200px] object-cover'
          />
        </motion.div>
      </div>

      {/* Right side: Instagram text */}
      <div className='w-[30%] flex flex-col justify-center max-sm:h-[200px] max-sm:w-full'>
        <div className='mt-12'>
          <h1 className='footer_primary text-[36px] tracking-wider text-black text-center'>
            Instagram
          </h1>
          <h1 className='text-[15px] mt-10 ml-5 tracking-wide text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h1>
          <h1 className='text-[30px] text-[#E53637] footer_primary tracking-wider text-center mt-3'>
            #Male_Fashion
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Media;
