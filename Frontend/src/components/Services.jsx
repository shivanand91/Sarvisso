import React from 'react'
import Card from './Card'
import clean from '../assets/images/clean.webp'
import plumb from '../assets/images/plumb.webp'
import electric from '../assets/images/electric.webp'


const Services = () => {
  return (
    <div className='border-2 m-4 px-6 pb-10 rounded-lg pt-2 shadow-md bg-primary-color'>
      <h1 className='text-center font-bold mb-4 mt-1 text-5xl'>Services</h1>
      <div className='md:flex md:justify-between md:items-center md:gap-5 px-4'>
        <Card text="Plumbing" img={plumb} />
        <Card text="Electrition" img={electric} />
        <Card text="Carpentry" img={clean} />
        <Card text="Interior design" img={clean} />
        <div className='flex  justify-center items-center mt-8 ml-4 rounded-lg'>
          <button className='h-[30px] w-[70px] bg-gray-200  rounded-md hover:bg-gray-300'>View All</button>
        </div>
      </div>
    </div>
  )
}
export default Services
