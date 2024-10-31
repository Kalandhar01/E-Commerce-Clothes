import React from 'react'
import Best from '../component/Best'
import Hero from '../component/Hero'
import LatestCollection from '../component/LatestCollection'
import News from '../component/News'
import Policy from '../component/Policy'

const Home = () => {
  return (
   <>
   <Hero/>
   <LatestCollection/>
   <Best/>
   <Policy/>
   <News/>

   </>
  )
}

export default Home