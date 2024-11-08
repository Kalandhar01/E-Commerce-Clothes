import React, { useContext, useEffect, useState } from 'react';
import Title from '../component/Title';
import { ShopContext } from '../context/ShopCon';

const Orders = () => {
  const {products, currency, delivery_fee,search,setSearch,showSearch,setShowSearch,
    cartItems,addToCart,getCardCount,updateQ,Amount,navigate,backendUrl,setToken,token,setCardItems} =useContext(ShopContext);


  //showon page
  useEffect(() => {
    loadOrderData();
    

  }, [token]);
  const[orderData, setOrderData] = useState([]);
  console.log(token);
  
  //toload the data from backend
  const loadOrderData = async ()=>{
    try {
      if(!token){
        return null
      }
      console.log("load working");
      // console.log(backendUrl);
      
      
     const response = await axios.post(  backendUrl + '/api/order/userorders',{},{headers:{token}})
   console.log(response.data);
  
     
      
    } catch (error) {
      
    }

  }

  return (
    <>
    <div className='border-t pt-16'>

      <div className='text-2xl'> 
        <Title text1={"MY"} text2={"ORDERS"}/>

      </div>

      <div className=''>
        {
          orderData.map( (item,index)=>(
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4 '>

              <div className='flex items-start gap-6 text-sm'>
                <img src={item.image[0]} className='w-16 sm:w-20' alt="" />

                <div className=''>
                  <p className='sm:text-base font-medium'>{item.name}</p>
                  <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
                    <p className='text-sm'>{currency}{item.price}.00</p>
                    <p>Quantity: 1</p>
                    <p>Size: M</p>
                  </div>
                  <p className='mt-2'>DATE : <span className='text-gray-400'>25/jul/24</span></p>
                </div>
              </div>

              <div className='md:w-1/2 flex justify-between'>
              <div className='flex items-center gap-2' >
                <p className='min-w-2 h-2 rounded-full bg-green-400'></p>
                <p className='text-sm md:text-base'>Ready to Ship</p>
              </div>
              <button className=' border px-4 py-2 text-sm font-medium rounded-sm '>Track Order</button>
              </div>

            </div>
          ))
        }
      </div>

    </div>
    </>
  )
}

export default Orders