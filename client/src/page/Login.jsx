import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopCon';

const Login = () => {
  const [currentState , setCurrentState] = useState('LOGIN')
  const { token , setToken , backendUrl,navigate} = useContext(ShopContext);


  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const onSubmithand = async (e) => {
    e.preventDefault();
  
    try {
      // Call sign-up API
      if (currentState === 'SIGN UP') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
  
        if (response.data.success) {
          const receivedToken = response.data.token;
          setToken(receivedToken);
          localStorage.setItem('token', receivedToken);
          console.log(receivedToken); // Log the token directly to verify it's correct
          toast.success("Successfully registered");
        } else {
          toast.error(response.data.message);
        }
      }
      // Call the login API
      else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
  
        if (response.data.success) {
          const receivedToken = response.data.token;
          setToken(receivedToken);
          localStorage.setItem('token', receivedToken);
          console.log(receivedToken); // Log the token directly to verify it's correct
          toast.success("Login successful");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error('Error during submission:', error); // Improved error logging
      toast.error(error.message);
    }
  };
  


  useEffect(() => {

    if(token){
      console.log(token);
      
      navigate('/')
    }
   
  }, [token])
  


  return (
    <form onSubmit={onSubmithand} className='flex flex-col items-center w-[90%] sm:max-w-90 m-auto mt-14 gap-4 text-gray '>

      <div className='inline-flex items-center gap-2 mb-2 mt-10' >
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

    {currentState === 'LOGIN' ? '' :
     
      <input
      onChange={(e)=> setName(e.target.value)} value={name}
      type="text" className='sm:w-[35%] w-full px-3 py-2 border border-gray-800'
      placeholder='Name'required /> }  
   

      
      <input
      onChange={(e)=> setEmail(e.target.value)} 
      value={email}
      type="Email" className='sm:w-[35%]  w-full px-3 py-2 border border-gray-800'
      placeholder='Email' required/>

      <input 
      onChange={(e)=> setPassword(e.target.value)} 
      value={password}
      type="Password" className='sm:w-[35%] w-full px-3 py-2 border border-gray-800'
      placeholder='Password' required/>

      <div className='sm:w-[35%] w-full flex justify-between text-sm mt-[8px] '>
       <p className='cursor-pointer'> Forget your Password</p>
       {
        currentState === 'LOGIN'
        ? <p className='cursor-pointer' onClick={()=>setCurrentState('SIGN UP')}>Create Account</p>
        :
        <p className='cursor-pointer' onClick={()=>setCurrentState("LOGIN")}>Login here</p>
       }
      </div>
      <button type='submit'
      className='bg-black text-white font-light px-8 mt-4 py-2'
      >{currentState == 'LOGIN' ? 'SIGN IN' : "SIGN UP"}</button>

      
      
    </form>
  )
}

export default Login
