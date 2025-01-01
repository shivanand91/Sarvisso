import React from 'react'
import Servicescomp from '../components/Services.jsx'

const Services = () => {
  return (
    <div>
      <h1 className='text-center text-2xl font-bold p-2 border m-2 shadow-lg rounded-lg'>Services Page </h1>
      <div className="servicesCard">
        <Servicescomp />
      </div>
    </div>
  )
}

export default Services