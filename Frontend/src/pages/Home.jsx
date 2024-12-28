import React from 'react'
import Swiper from '../components/Swiper'
import Services from '../components/Services'
import Works from '../components/Works'
import RegisterPopUp from '../components/RegisterPopUp'
import Whyuse from '../components/Whyuse'

const Home = () => {
  return (
    <div>
      <RegisterPopUp />
     <Swiper />
     <Services/>
     <Works/>
     <Whyuse/>
  </div>
  )
}

export default Home