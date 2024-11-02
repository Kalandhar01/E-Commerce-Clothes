import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { backendUrl, currency } from '../App';

const List = ( {token}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      console.log('Response data:', response.data);

      // Ensure the response structure is correct
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log('Error fetching data:', error);
      toast.error(error.message);
    }
  };

  //remove product

  const removeProduct = async (id)=>{
   try {

    const response =  await axios.post(backendUrl + '/api/product/remove' , {id} ,{headers:{token}})
    
    if(response.data.success){
      toast.success(response.data.message)
      await fetchList()
    }
    else{
      toast.error(response.data.message)
    }

   } catch (error) {
    console.log('Error fetching data:', error);
      toast.error(error.message);
    
   }

  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className='mb-2'>All Products List</p>

      <div className='flex flex-col gap-2'>
        {/* List Table title */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {/* Product List */}
        {list.length === 0 ? (
          <p>No products available</p>
        ) : (
          list.map((item) => (
            <div key={item._id} className='grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border gap-2'>
              <img src={item.image[0]} alt={item.name} className='w-16 h-16 object-cover' />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <button 
              onClick={()=>removeProduct(item._id)}
               className='text-red-500 md:text-center cursor-pointer  text-lg'>X</button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default List;