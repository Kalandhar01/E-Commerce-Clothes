import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { star_dull_icon, star_icon } from '../assets';
import Related from '../component/Related';
import { ShopContext } from '../context/ShopCon';

const Product = () => {
  const { productId } = useParams();
  const { products, currency , addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [size, setSize] = useState('');
  const [image, setImage] = useState('');

  const fetchProductData = () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <>
      <div className='border-t-2 pt-10 transition-opacity ease-in-out duration-500 opacity-100'>
        <div className='flex gap-12 sm:gap-8 flex-col sm:flex-row'>
          
          {/* Product images */}
          <div className='flex-1 flex flex-col gap-3 sm:flex-row sm:flex-row-reverse'>
          <div className='w-full sm:w-[80%] sm:pl-10'>
              <img src={image} alt="Main Product" className='w-50 h-50' />
            </div>
            
            <div className='flex flex-row sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
              {productData.image.map((item, index) => (
                <img
                  onClick={() => setImage(item)}
                  src={item}
                  key={index}
                  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer m-1'
                  alt=""
                />
              ))}
            </div>

          
          </div>

          {/* Product info */}
          <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={star_icon} alt="" className="w-3.5" />
              <img src={star_icon} alt="" className="w-3.5" />
              <img src={star_icon} alt="" className="w-3.5" />
              <img src={star_icon} alt="" className="w-3.5" />
              <img src={star_dull_icon} alt="" className="w-3.5" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-3 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-3 text-gray-500 md:w-4/5'>{productData.description}</p>

            <div className='flex flex-col gap-4 my-5'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`}
                    key={index}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <button 
            onClick={()=>addToCart(productData._id,size)}
            className='bg-black text-white px-8 py-3 text-sm active:bg-slate-700'>ADD TO CART</button>

            <hr className='mt-8 sm:w-4/5' />

            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100% Original Product</p>
              <p>COD available</p>
              <p>Easy Return And Exchange Within 7 Days</p>
            </div>
          </div>
        </div>


        {/* DESC && REWEEV */}

        <div className='mt-20'>
          <div className=' flex '>
            <p className='border px-5 py-3 text-sm '>Description</p> 
            <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolor itaque quae minima obcaecati vero harum incidunt cumque sit doloremque culpa, architecto eligendi velit nihil repudiandae, non inventore dolore? Quos.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, odio pariatur ratione sed tempora tempore adipisci corporis dolorem quas unde magni voluptate nisi ipsum quasi sapiente, ipsam veritatis facere impedit!</p>
            </div>
        </div>


{/* RELATED */}
<Related category={productData.category} subcategory={productData.subcategory}/>





      </div>
    </>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;