import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './component/Navbar'
import SearchBar from './component/SearchBar'
import About from './page/About'
import Cart from './page/Cart'
import Collection from './page/Collection'
import Contact from './page/Contact'
import Home from './page/Home'
import Login from './page/Login'
import Orders from './page/Orders'
import PlaceOrder from './page/PlaceOrder'
import Product from './page/Product'
// toast
import 'react-toastify/dist/ReactToastify.css'
import Verify from './page/Verify'

const App = () => {
  return (

    <div className='px-4 sm:px-[1vw] md:px-[1vw] lg:px-[4vw]'>
      <ToastContainer />


      <Navbar/>
      <SearchBar/>

      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path='/collection' element={<Collection/>} />
        
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/verify' element={<Verify/>} />
        

      </Routes>
      {/* <Footer className='p-0 '/> */}

     

    </div>
   
  )
}

export default App
