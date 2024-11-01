import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { left, mal1, mal2, right, rightarr } from '../assets';
import Button from '../component/Button';
// import Button from '../components/Button';
import { Link } from 'react-router-dom';


const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 20 } },
    exit: { opacity: 0, y: 50, transition: { ease: 'easeInOut', duration: 0.5 } },
  };

  const [click, setClick] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const collections = [
    {
      title: "SUMMER COLLECTION",
      subtitle: "Fall-Winter Collection 2030",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: mal1,
    },
    {
      title: "WINTER COLLECTION",
      subtitle: "Winter-Spring Collection 2031",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: mal2,
    },
  ];

  const handleClick = () => {
    setClick(prev => !prev);
    setCurrentIndex(prevIndex => (prevIndex + 1) % collections.length);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % collections.length);
      setClick(prev => !prev); 
    }, 5000);

    return () => clearInterval(interval); 
  }, [collections.length]);

  return (
    <div className='w-full h-screen relative overflow-hidden '>

      <img src={right} alt="" className='w-full h-full object-cover opacity-50 ' />

      <AnimatePresence>
        {click ? (
          <motion.div
            className='w-full h-full flex gap-10 justify-between items-center z-5 absolute top-0 flex-col md:flex-row' 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={currentIndex} 
          >
            <div className='ml-4  w-full md:w-[50%]'>
              <motion.h1
                className='tracking-widest text-[20px] text-[#E53637] font-[600] mb-4 text-center md:text-left max-sm:mt-16 prata-regular' 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              >
                {collections[currentIndex].title}
              </motion.h1>
              <motion.h1
                className='text-[40px] md:text-[54px] text-black font-medium text-center md:text-left prata-regular' 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              >
                {collections[currentIndex].subtitle}
              </motion.h1>
              <motion.p
                className='w-[90%] md:w-[80%] pt-3 mx-auto md:mx-0 prata-regular text-center'  
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              >
                {collections[currentIndex].description}
              </motion.p>
              <div className='mt-4 text-center md:text-left'> 
               <Link to='/collection' >
               <Button />
               
               </Link>
              </div>
            </div>
            <motion.div className='w-[90%] md:w-[50%] mx-auto' initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
              <img src={collections[currentIndex].image} alt="" className='mx-auto' />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            className='w-full h-full flex gap-10 justify-between items-center z-10 absolute top-0 flex-col md:flex-row' 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            key={currentIndex} 
          >
            <div className='ml-4  w-full md:w-[50%]'> 
              <motion.h1
                className='tracking-widest text-[20px] text-[#E53637] font-[600] mb-4 text-center md:text-left max-sm:mt-16  prata-regular' // Center text on mobile
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              >
                {collections[currentIndex].title}
              </motion.h1>
              <motion.h1
                className='text-[40px] md:text-[54px] text-black font-medium text-center md:text-left prata-regular' 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              >
                {collections[currentIndex].subtitle}
              </motion.h1>
              <motion.p
                className='w-[90%] md:w-[80%] pt-3 mx-auto md:mx-0 prata-regular text-center' 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
              >
                {collections[currentIndex].description}
              </motion.p>
              <div className='mt-4 text-center md:text-left prata-regular'> 
                <Button />
              </div>
            </div>
            <motion.div className='w-[90%] md:w-[50%] mx-auto' initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
              <img src={collections[currentIndex].image} alt="" className='mx-auto' /> 
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className='absolute top-[15rem] left-7 z-10 max-sm:top-[23rem]'>
        <img
          src={left}
          alt="Toggle Collection"
          className='w-8 h-8 cursor-pointer'
          onClick={handleClick}
        />
      </div>

      <div className='absolute top-[15rem] right-7 z-10 max-sm:top-[23rem]'>
        <img
          src={rightarr}
          alt="Toggle Collection"
          className='w-7 h-8 cursor-pointer'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Hero;
