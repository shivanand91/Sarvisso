import React from 'react'
import Swiper from '../components/Swiper'
import Services from '../components/Services'
import Works from '../components/Works'
import Whyuse from '../components/Whyuse'

const Home = () => {
  return (
  <div>
     <Swiper />
     <Services/>
     <Works/>
     <Whyuse/>
  </div>
  )
}

export default Home