import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopCon';

const ProductItem = ({id , image , name , price}) => {
 
    const {currency } = useContext(ShopContext);
 
    return (
   <>
        <Link className='text-gray-700 cursor-pointer ' to={`/product/${id}`}>

        <div className='overflow-hidden w-full h-[20rem] p-2'>
            <img src={image[0]} alt="" className='hover:scale-110 transition ease-in-out w-full h-full object-cover' />
        </div>

        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className=' text-sm font-medium'>{currency}{price}</p>
        </Link>
   </>
  )
}

export default ProductItem