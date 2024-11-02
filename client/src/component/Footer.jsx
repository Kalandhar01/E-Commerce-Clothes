import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { main } from "../assets";
 





const Footer = () => {
    return (

        // {/* 
        //             <motion.div
        //                 initial={{ y: 100, opacity: 0 }}
        //                 animate={{ y: 0, opacity: 1 }}
        //                 transition={{ duration: 0.7 }}
        //                 className='w-screen h-screen flex justify-center items-center'



        //             >ppp
        //                 <h1 className='footer_primary '>Contact us</h1>
        //             </motion.div> */}

        <>

            <div className="w-full h-[23rem] bg-black max-sm:h-full p-[40px]  pb-6 ">
                <div className="flex justify-start  items-start gap-12 max-sm:flex-col max-sm:gap-10">

                    {/* //1st div */}
                    <div className="w-[29%] h-full px-7 max-sm:w-full max-sm:h-auto max-sm:p-0">
                        <motion.div
                            initial={{ y: 70, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                        >

                            <div className=" w-full  pb-8 max-sm:h-full">
                                <img src={main}
                                    width={160}
                                    className="max-sm:w-[90%]"


                                />
                            </div>

                        </motion.div>

                        <motion.div
                            initial={{ y: 60, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                        >
                            <p className="text-white text-justify text-[14px] w-[90%] max-sm:text-[16px] text-[#B7B7B7]">
                                The customer is at the heartxof our unique business model, which includes design.
                            </p>
                        </motion.div>



                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                        >
                            <div className="w-full pt-7  ">
                                {/* <img src={card} alt=""

                                    width={200}
                                    className=""
                                /> */}
                            </div>
                        </motion.div>



                    </div>

                    {/* //2edn */}
                    <div className="w-[8rem] max-sm:w-full ">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                        >

                            <h1 className="text-white footer-primary text-[16px] font-medium pb-7 max-sm:pb-4">
                                SHOPPING
                            </h1>
                        </motion.div>


                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                        >
                          <Link to='/'>
                                <h1 className="text-white  pl-1 footer-primary text-[14px]  pb-4 max-sm:text-[15px] text-[#B7B7B7]">
                                    Home
                                </h1>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                        >

                            <a href="">
                                <h1 className="text-white  pl-1 footer-primary text-[14px]  pb-4 max-sm:text-[15px] text-[#B7B7B7]">
                                    Trending Shoes
                                </h1>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                        >
                            <a href="">
                                <h1 className="text-white  pl-1 footer-primary text-[14px]  pb-4 max-sm:text-[15px] text-[#B7B7B7]">
                                    Accessories
                                </h1>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                        >
                            <a href="">
                                <h1 className="text-white  pl-1 footer-primary text-[14px]  pb-4 max-sm:text-[15px] text-[#B7B7B7]">
                                    Sale
                                </h1>
                            </a>
                        </motion.div>

                    </div>  
                    <div className="w-[13rem] max-sm:w-full ">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                        >

                            <h1 className="text-white footer-primary text-[16px] font-medium pb-7 max-sm:text-[18px]  max-sm:pb-4">
                               ADDRESS
                            </h1>
                        </motion.div>


                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                        >
                            <a href="">
                                <h1 className="text-white  pl-1 footer-primary text-[14px]  pb-4 max-sm:text-[15px] text-[#B7B7B7]">
                                    +91 9025679255
                                </h1>
                            </a>
                        </motion.div>

                        

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                        >
                            <a href="">
                                <h1 className="text-white  pl-1 footer-primary text-[14px]  pb-4 max-sm:text-[15px] text-[#B7B7B7] last:">
                                    Kalandhar@gmail.com
                                </h1>
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7 }}

                        >
                            <a href="">
                                <h1 className="text-white  pl-1 footer-primary text-[14px]  pb-4 max-sm:text-[15px] text-[#B7B7B7]">
                                    Mimisal-New Street.
                                </h1>
                            </a>
                        </motion.div>

                    </div>


                    {/* <div className="w-[13rem]">

                        <h1 className="text-white footer-primary text-[16px] font-medium pb-7">
                            SHOPPING
                        </h1>

                        <a href="">
                            <h1 className="text-white  pl-1 footer-primary text-[14px]  pb-4">
                                Contact Us
                            </h1>
                        </a>
                        <a href="">
                            <h1 className="text-white  pl-1 footer-primary text-[14px]  pb-4">
                                Payment Methods
                            </h1>
                        </a>
                        <a href="">
                            <h1 className="text-white  pl-1 footer-primary text-[14px]  pb-4">
                                Delivary
                            </h1>
                        </a>
                        <a href="">
                            <h1 className="text-white  pl-1 footer-primary text-[14px]  pb-4">
                                Return & Exchanges
                            </h1>
                        </a>

                    </div> */}


{/* <div className="relative w-[14rem] max-sm:w-full">
    <h1 className="text-white footer-primary text-[16px] font-medium pb-7 max-sm:pb-4 max-sm:text-[20px]">
        NewsLetter
    </h1>
    <p className="text-white text-[13px] w-[100%] max-sm:text-[15px] text-[#B7B7B7]">
        Be the first to know about new arrivals, look books, sales & promos!
    </p>

    <div className="flex items-center mt-2">
        <input 
            type="email" 
            placeholder="Your email" 
            className="w-full p-2 text-[13px] rounded-sm mt-5 border border-gray-300 focus:outline-none" 
        />
      
    </div>
</div> */}








                   


                </div>
           
                <div className=" w-full sm:w-[100%] max-w-[100%] mt- 7 ">
  <div className=" w-full">
   <hr  className="mt-2"/>
  </div>

  <div className="flex justify-center pt-3">
    <h1 className="text-white text footer-primary text-[13px] text-[#B7B7B7] max-sm:text-center">Copyright © 2024 All rights reserved | This Project is made by
        <a href="https://kalandhar.netlify.app/"> <span className="text-[#E53637]">Kalandhar</span></a></h1>
  </div>
</div>


           
           
            </div>


            

        </>

    );
};

export default Footer;
