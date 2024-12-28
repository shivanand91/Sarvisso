import React, { useState } from 'react'
import Swiper from '../components/Swiper'
import Services from '../components/Services'
import Works from '../components/Works'
import RegisterPopUp from '../components/RegisterPopUp'
import Whyuse from '../components/Whyuse'
import Testimonial from '../components/Testimonial'

const Home = () => {
  const [showRegister, setShowRegister] = useState(false)
  return (
    <div>
      {
        showRegister && <RegisterPopUp onClose={() => setShowRegister(false) } />
      }
     <Swiper />
     <Services/>
     <Works/>
     <Whyuse/>
     <Testimonial/>
     
  </div>
  )
}

export default Home