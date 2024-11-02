import React from 'react'
import Best from '../component/Best'
import Footer from '../component/Footer'
import Hero from '../component/Hero'
import LatestCollection from '../component/LatestCollection'
import News from '../component/News'
import Policy from '../component/Policy'
import Media from '../page/Meadia'

const Home = () => {
  return (
   <>
   <Hero/>
   <LatestCollection/>
   <Best/>
   <Policy/>
   <Media/>
   <News/>
   <Footer/>

   </>
  )
}

export default Home