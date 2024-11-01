import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopCon';
import Title from './Title';

const CardTotal = () => {
    const {Amount , currency  , products , delivery_fee, navigate } = useContext(ShopContext);
  return (
    <>

    <div className='w-full'>
        <div className='text-2xl '>
            <Title text1={"CART"} text2={"TOTALS"}/>
        </div>
        
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>SubTotal</p>
                <p>{currency}{Amount()}.00</p>
            </div>
            <hr/>

            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency}{delivery_fee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total </b>
                <b>{currency}{Amount() === 0 ? 0: Amount() + delivery_fee}.00</b>
            </div>
        </div>

    </div>
      
    </>
  )
}

export default CardTotal
