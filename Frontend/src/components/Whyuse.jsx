import React from 'react'

const Whyuse = () => {
  return (
    <div className='flex justify-center items-center flex-col shadow-md border-2 m-4 pt-2 pb-2 rounded-lg px-6'>
      <h1 className='text-center font-bold mb-4 mt-4 text-5xl '>Why Choose Us</h1>
      <div className=' font-bold md:flex  md:justify-center md:items-center md:gap-48 text-2xl  text-center '>
        <div><div className='h-[140px] w-[140px] gap-3 z-50 border-2 shadow-2xl rounded-md '></div><h1 className='w-[20px] text-center mt-4'>Verified Professionals</h1></div>
        <div><div className='h-[140px] w-[140px] gap-3 z-50 border-2 shadow-2xl rounded-md'></div><h1 className='w-[15px] text-center mt-4'>On-Demand Services</h1></div>
        <div> <div className='h-[140px] w-[140px] gap-3 z-50 border-2 shadow-2xl rounded-md'></div><h1 className='w-[20px] text-center mt-4'>Affordable Pricing</h1></div>
      </div>
    </div>
  )
}

export default Whyuse
