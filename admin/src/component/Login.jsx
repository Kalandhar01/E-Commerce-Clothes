import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { backendUrl } from '../App';

const Login = ({setToken}) => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');


    //connect to backend
    
    const onSubmithand = async (e)=>{
        try {
            
            e.preventDefault();
        const reponse = await axios.post(backendUrl + '/api/user/admin',{email,password})
        console.log(reponse);

        if(reponse.data.success){
            setToken(reponse.data.token);
        }
        else {
            toast.error(reponse.data.message)
        }
        
        
        
    } catch (error) {
        console.log(error);
        toast.error(error.message);
            
            
        }
    } 
  return (
    <div className='min-h-screen flex items-center justify-center w-full'>

        <div className='bg-white shadow-md rounded-lg px-8  py-6 max-w-md'>
            <h1 className='text-2xl font-bold ,mb-4'>Admin Panel</h1>
            <form onSubmit={onSubmithand} >
                 <div className='mb-3 m-w-72'>
                    <p  className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                    <input onChange={(e)=> setEmail(e.target.value)}  value={email} className='rounded w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='Your Admin Email'  required />
                 </div>

                 <div className='mb-3 m-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                    <input onChange={(e)=> setPassword(e.target.value)}  value={password} className='rounded w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Admin Password'  required/>
                 </div>
                 <button 
                 className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black' 
                  type='submit'>Login </button>
            </form>
        </div>
    </div>
  )
}

export default Login