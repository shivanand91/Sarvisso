import React from 'react'
import Card from './Card'
import PrimaryBtn from './PrimaryBtn'


const Services = () => {
  return (
    <div>
      <h1 className='text-center font-bold mb-4 mt-4 text-5xl'>Services</h1>
      <div className='md:flex md:justify-between md:items-center md:gap-8 px-4'>
        <Card />
        <Card />
        <Card />
        <Card />
        <div className='h-[250px] w-[250px] shadow-lg border-2 flex flex-col justify-center items-center m-auto rounded-lg mt-4'>
          <div className='h-[140px] w-[140px] bg-gray-200  rounded-md gap-3 flex items-center justify-center'>
             <button>View All</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services
