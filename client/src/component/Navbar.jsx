import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { cart_icon, dropdown_icon, menu_icon, profile_icon, search_icon, white } from '../assets/index';
import { ShopContext } from '../context/ShopCon';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {showSearch ,setShowSearch ,getCardCount} = useContext(ShopContext);

  const handleMenuToggle = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  const handleSearch= ()=>{
    setShowSearch ((prev) => !prev);
  }

  return (
    <>
      <div className='flex items-center justify-between py-5 font-medium '>
      
      <Link to='/'>
        <img src={white} alt="" className='w-36' />
       </Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-slate-700 hidden' />
          </NavLink>

          <NavLink to='/Collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-slate-700 hidden' />
          </NavLink>

          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-slate-700 hidden' />
          </NavLink>

          <NavLink to='/contact' className='flex flex-col items-center gap-1'>
            <p>CONTACT</p>
            <hr className='w-2/4 border-none h-[1.5px] bg-slate-700 hidden' />
          </NavLink>
        </ul>

        {/* User info */}
        <div className='flex items-center gap-6'>
          <img src={search_icon}
          onClick={handleSearch} 
          alt="" className='w-4 cursor-pointer' />

          <div className='group relative '> 
           
           <Link to='/login'>
            <img src={profile_icon} alt="" className='w-4 cursor-pointer' />
           </Link>
            <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-20'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p className='cursor-pointer hover:text-black'>Orders</p>
                <p className='cursor-pointer hover:text-black'>Log Out</p>
              </div>
            </div>
          </div>

          <Link to='/cart' className='relative'>
            <img src={cart_icon} alt="" className='w-4' />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCardCount()}</p>
          </Link>

          <img src={menu_icon} alt="" onClick={handleMenuToggle} className='w-4' />
          
          {/* Menu Button Handler */}
          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full h-screen z-20 backdrop-blur-lg' : 'w-0'}`}>

            <div className='flex flex-col text-gray-600'>
              <div onClick={handleMenuToggle} className='flex items-center gap-4 p-3'>
                <img src={dropdown_icon} alt=""  className='h-4 rotate-180 cursor-pointer '/>

                <p className='cursor-pointer hover:text-black'>Back</p>
              </div>

              <NavLink   onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/' >
              HOME
              </NavLink>

              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection' >
              COLLECTION
              </NavLink>

              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/About' >
              ABOUT
              </NavLink>

              <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact' >
              CONTACT
              </NavLink>





            </div>





            
            {/* <button onClick={handleMenuToggle} className="absolute top-2 right-2">Close</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
