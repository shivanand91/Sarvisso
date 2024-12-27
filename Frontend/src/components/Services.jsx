import React from 'react'
import Card from './Card'
import clean from '../assets/images/clean.webp'
import plumb from '../assets/images/plumb.webp'
import electric from '../assets/images/electric.webp'


const Services = () => {
  return (
    <div>
      <h1 className='text-center font-bold mb-4 mt-4 text-5xl'>Services</h1>
      <div className='md:flex md:justify-between md:items-center md:gap-8 px-4'>
        <Card text="Plumbing" img={plumb} />
        <Card text="Electrition" img={electric} />
        <Card text="Carpentry" img={clean} />
        <Card text="Interior design" img={clean} />
        <div className='h-[250px] w-[250px] shadow-lg border-2 flex flex-col justify-center items-center m-auto rounded-lg mt-4'>
          <button className='h-[140px] w-[140px] bg-gray-200  rounded-md gap-3 flex items-center justify-center hover:bg-gray-300'>View All</button>
        </div>
      </div>
    </div>
  )
}
export default Services
