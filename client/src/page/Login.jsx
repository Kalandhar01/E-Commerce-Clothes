import React, { useState } from 'react';

const Login = () => {
  const [currentState , setCurrentState] = useState('SIGN UP')


  const onSubmithand = async (e)=>{
    e.preventDefault();


  }


  return (
    <form onSubmit={onSubmithand} className='flex flex-col items-center w-[90%] sm:max-w-90 m-auto mt-14 gap-4 text-gray '>

      <div className='inline-flex items-center gap-2 mb-2 mt-10' >
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

    {currentState === 'LOGIN' ? '' :  <input type="text" className='sm:w-[35%] w-full px-3 py-2 border border-gray-800'
      placeholder='Name'required /> }  
   

      <input type="Email" className='sm:w-[35%]  w-full px-3 py-2 border border-gray-800'
      placeholder='Email' required/>
      <input type="Password" className='sm:w-[35%] w-full px-3 py-2 border border-gray-800'
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
