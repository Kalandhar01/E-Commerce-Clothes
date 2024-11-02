import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from './component/Login'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = 'Rs';

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');
  //to resolve automati clogout

  useEffect(() => {
    localStorage.setItem('token',token)
  
  }, [token]);

  return   (
 
    
      <div className='bg-gray-50 min-h-scree'>
        <ToastContainer/>
        {token === "" ? 
        <Login setToken={setToken}/> : 
        
        <>

          <Navbar  setToken={setToken}/>
        <hr />

      <div className='flex w-full'>
        <Sidebar />

        <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>
          <Routes>
            <Route path='/add' element={<Add   setItem={setToken} token={token} />}>
              </Route>
            <Route path='/list' element={<List  setItem={setToken} token={token} />}>
              </Route>
            <Route  path='/orders' element={<Orders setItem={setToken} token={token} />}>
              </Route>
          </Routes>



        </div>

      </div>

        </>
        
        }
        
    
      </div>


  )
}

export default App
