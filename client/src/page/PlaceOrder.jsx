import axios from 'axios';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { razorpay_logo, stripe_logo } from '../assets';
import CardTotal from '../component/CardTotal';
import Title from '../component/Title';
import { ShopContext } from '../context/ShopCon';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {
    products, currency, delivery_fee, cartItems, Amount, navigate, backendUrl, setCardItems, token,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstname: '', lastname: '', email: '', street: '',
    city: '', state: '', zipcode: '', country: '', phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  // Extracts and structures order items
  const prepareOrderItems = () => {
    const orderItems = [];
    for (const itemKey in cartItems) {
      for (const sizeKey in cartItems[itemKey]) {
        const quantity = cartItems[itemKey][sizeKey];
        if (quantity > 0) {
          const itemInfo = structuredClone(products.find((product) => product._id === itemKey));
          if (itemInfo) {
            itemInfo.size = sizeKey;
            itemInfo.quantity = quantity;
            orderItems.push(itemInfo);
          }
        }
      }
    }
    return orderItems;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderItems = prepareOrderItems();

    const orderData = {
      address: formData,
      items: orderItems,
      amount: Amount() + delivery_fee,
    };

    try {
      if (method === 'cod') {
        const response = await axios.post(`${backendUrl}/api/order/place`, orderData, { headers: { token } });
        if (response.data.success) {
          setCardItems({});
          toast.success("Order placed successfully!");
          navigate('/orders');
        } else {
          toast.error(response.data.message);
        }
      } else if (method === 'stripe') {
        const responseStripe = await axios.post(`${backendUrl}/api/order/stripe`, orderData, { headers: { token } });
        if (responseStripe.data.success) {
          const { session_url } = responseStripe.data;
          window.location.replace(session_url);
        } else {
          toast.error(responseStripe.data.message);
        }
      } else if (method === 'razorpay') {
        toast.error("Razorpay integration pending. Use Stripe for payment.");
      }
    } catch (error) {
      console.error('Error submitting the order:', error);
      toast.error("An error occurred while submitting your order.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col sm:flex-row justify-around pt-5 sm:pt-14 min-h-[80vh]'
    >
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' onChange={handleChange} name='firstname' value={formData.firstname} required />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name' onChange={handleChange} name='lastname' value={formData.lastname} required />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email Address' onChange={handleChange} name='email' value={formData.email} required />
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street' onChange={handleChange} name='street' value={formData.street} required />
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' onChange={handleChange} name='city' value={formData.city} required />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State' onChange={handleChange} name='state' value={formData.state} required />
        </div>
        <div className='flex gap-3'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='ZipCode' onChange={handleChange} name='zipcode' value={formData.zipcode} required />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' onChange={handleChange} name='country' value={formData.country} required />
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="phone" placeholder='Phone' onChange={handleChange} name='phone' value={formData.phone} required />
      </div>

      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CardTotal />
        </div>
        <div className='mt-12'>
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-red-800' : ''}`}></p>
              <img src={stripe_logo} className='h-5 mx-5' alt="Stripe" />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-red-800' : ''}`}></p>
              <img src={razorpay_logo} className='h-5 mx-5' alt="Razorpay" />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-red-800' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>
          <div className='w-full text-end mt-8'>
            <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
