import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopCon';
import ProductItem from './ProductItem';
import Title from './Title';

const Related = ({category , subcategory}) => {

    const {products} = useContext(ShopContext);
    const [Related,setRelated] = useState([]);

    useEffect(() => {
if(products.length>0){
    let cp = products.slice();

    cp = cp.filter( (item)=> category===item.category);
    cp = cp.filter( (item)=> subcategory === item.subcategory);
   setRelated(cp.slice(0,5));
}
      
    }, [products])
    
  return (
    <>
    <div className='my-24'>
        <div className='text-center text-3xl py-2 '>
            <Title text1={"RELATED" } text2={"PRODUCTS"} />


        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 gap-y-10'>
            {
                Related.map((item,index)=> (
              <ProductItem key={index}
              name={item.name}
              id={item.id}
              price={item.price}
              image={item.image}
/>
                ))
            }
        </div>

    </div>
      
    </>
  )
}

export default Related
