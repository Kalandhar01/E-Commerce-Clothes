import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cross_icon, search_icon } from '../assets';
import { ShopContext } from '../context/ShopCon';

const SearchBar = () => {
    
    const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext);
    const [visible ,setVisible] = useState(false);

    const location = useLocation();
    // console.log(location);
    
    
    useEffect(() => {
      // console.log(location.pathname)
      if(location.pathname.includes('Collection') && showSearch){
        setVisible(true);
        
      }
      else{     
        setVisible(false);
      }
    }, [location])
  
    
  return showSearch && visible ? (
    <>
    <div className='border-t border-b bg-gray-50 text-center z-50'>
      <div className='inline-flex items-center
      justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        
        <input
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        className='flex-1 outline-none bg-inherit text-sm'
         type="text" placeholder='Search' />
         <img src={search_icon} alt="" 
         className='w-4'/>
         
      </div>
      <img src={cross_icon} alt="" 
         onClick={()=>setShowSearch(false)}
         className='inline w-3 cursor-pointer'/>

    </div>

    
      
    </>
  ) : null
}

export default SearchBar
