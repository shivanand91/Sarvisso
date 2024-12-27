import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <div>
        <h1 className='text-center font-bold mb-4 mt-4 text-5xl'>Services</h1>
        <div className='md:flex md:justify-between md:items-center md:gap-8 px-4'>
        <Card text="Plumbing"/>
        <Card text="Electrition"/>
        <Card text="Carpentry"/>
        <Card text="Interior design"/>
      
        </div>
       
        
       
    </div>
  )
}





export default Services
