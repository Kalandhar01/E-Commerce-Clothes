import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopCon';

const Verify = () => {
    const { products, currency, delivery_fee,search,setSearch,showSearch,setShowSearch,
        cartItems,addToCart,getCardCount,updateQ,Amount,navigate,backendUrl,setToken,token,setCardItems} = useContext(ShopContext);
    const [searchParams,setSearchParams] = useSearchParams();
    
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');
    console.log(success);
    console.log(orderId);
    
  
    
    const verifyPayment = async () => {
        try {
          if (!token) return; // Prevent the function if no token is present
      
          const response = await axios.post(
            `${backendUrl}/api/order/verifyStripe`,
            { success, orderId },
            { headers: { token } }
          );
      
          if (response.data.success) {
            setCardItems({});
            toast.success("Payment Success")
            navigate('/orders');
          } else {
            toast.error("Payment failed");
            navigate('/cart');
          }
        } catch (error) {
          console.error(error);
          toast.error(error.message);
        }
      };
      

    useEffect(() => {
        
        
        verifyPayment();
    }, [token]);
  return (
    <div>
        
      
    </div>
  )
}

export default Verify
