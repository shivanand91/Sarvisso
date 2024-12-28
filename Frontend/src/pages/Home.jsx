import React from 'react'
import Swiper from '../components/Swiper'
import Services from '../components/Services'
import Works from '../components/Works'
import RegisterPopUp from '../components/RegisterPopUp'

const Home = () => {
  return (
    <div>
      <RegisterPopUp />
     <Swiper />
     <Services/>
     <Works/>
  </div>
  )
}

export default Home