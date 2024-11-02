import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';
import { upload_area } from '../assets/assets';

const Add = ({ token }) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subcategory, setSubCategory] = useState("Topwear");
  const [bestseller, setBestSeller] = useState(false);
  const [size, setSize] = useState([]);

  const onSubmitHand = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subcategory", subcategory);
      formData.append("bestseller", bestseller);
      formData.append("size", JSON.stringify(size)); // Sending sizes

      if (image1) formData.append("image1", image1);
      if (image2) formData.append("image2", image2);
      if (image3) formData.append("image3", image3);
      if (image4) formData.append("image4", image4);

      const response = await axios.post(backendUrl + "/api/product/add", formData, { headers: { token } });
      
      if (response.data.success) {
        toast.success(response.data.message);
        setName('');
        setDescription('');
        setPrice('');
        setSize([]); // Reset size selection
        // Reset images if needed
        setImage1(null);
        setImage2(null);
        setImage3(null);
        setImage4(null);
      }

    } catch (error) {
      toast.error("Error adding product"); // Show error message
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmitHand} className='flex flex-col w-full items-start gap-3'>
      {/* Image Upload Section */}
      <div>
        <p className='mb-2'>Upload Images</p>
        <div className='flex gap-2'>
          {[image1, image2, image3, image4].map((image, index) => (
            <label key={index} htmlFor={`image${index + 1}`}>
              <img className='w-20' src={!image ? upload_area : URL.createObjectURL(image)} alt="" />
              <input
                onChange={(e) => {
                  if (index === 0) setImage1(e.target.files[0]);
                  else if (index === 1) setImage2(e.target.files[0]);
                  else if (index === 2) setImage3(e.target.files[0]);
                  else if (index === 3) setImage4(e.target.files[0]);
                }}
                type="file"
                id={`image${index + 1}`}
                hidden
              />
            </label>
          ))}
        </div>
      </div>

      {/* Product Details Section */}
      <div className='w-[21.5rem] max-sm:w-full'>
        <p className='mb-2'>Product Name</p>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full max-w-[500px] px-3 py-2'
          type="text"
          placeholder='Type here'
          required
        />
      </div>

      <div className='w-[21.5rem] max-sm:w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='w-full max-w-[500px] px-3 py-2'
          placeholder='Write content here'
          required
        />
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8 items-center'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select onChange={(e) => setCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Sub Category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Topwear">Topwear</option>
            <option value="Bottomwear">Bottomwear</option>
            <option value="Winterwear">Winterwear</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            className='w-full px-3 py-2 sm:w-[120px]'
            type="number"
            placeholder='ex: 199'
            required
          />
        </div>
      </div>

      {/* Sizes Selection */}
      <div>
        <p className='mb-2'>Product Sizes</p>
        <div className='flex gap-3'>
          {['S', 'M', 'L', 'XL', 'XXL'].map(sizeOption => (
            <div key={sizeOption} onClick={() => setSize(prev => prev.includes(sizeOption) ? prev.filter(item => item !== sizeOption) : [...prev, sizeOption])}>
              <p className={`${size.includes(sizeOption) ? 'bg-pink-300' : 'bg-slate-200'} px-3 py-1 cursor-pointer`}>{sizeOption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Best Seller Checkbox */}
      <div className='flex gap-2 mt-2'>
        <input
          onChange={() => setBestSeller(prev => !prev)}
          type="checkbox"
          id='bestseller'
          checked={bestseller}
        />
        <label className='cursor-pointer' htmlFor="bestseller">Add to Bestseller</label>
      </div>

      <button className='w-28 py-3 mt-4 bg-black text-white' type='submit'>
        ADD
      </button>
    </form>
  );
}

export default Add;
