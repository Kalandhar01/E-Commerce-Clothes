import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopCon';
import ProductItem from './ProductItem'; // Ensure this component is imported
import Title from './Title';

const Best = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        // Filter products to get bestsellers
        const bestProduct = products.filter(item => item.bestseller); // Fixed the property name to match your data
        setBestSeller(bestProduct.slice(0, 5));
    }, [products]); // Use products as the dependency

    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'BEST'} text2={"SELLERS"} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eius blanditiis temporibus quisquam fugiat.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                {bestSeller.length > 0 ? (
                    bestSeller.map(item => (
                        <ProductItem key={item._id} // Using _id as the key
                            id={item._id}
                            image={item.image} // Ensure image is displayed correctly
                            name={item.name}
                            price={item.price}
                        />
                    ))
                ) : (
                    <p className='text-center'>No best sellers available.</p> // Handle case with no best sellers
                )}
            </div>
        </div>
    );
}

export default Best;
