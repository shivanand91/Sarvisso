import React from 'react'
import Servicescomp from '../components/Services.jsx'

const Services = () => {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold p-2 border m-2 shadow-lg rounded-lg'>World Best IT-Services We Provide </h1>
      <div className='border-2 shadow-lg rounded-lg p-2 m-2 hover:bg-orange-400'>
        <div className="p-2  m-2  flex justify-evenly gap-3 bg-primary-color rounded-lg">
          <div className='w-[300px] p-4 shadow-lg rounded-lg border-2 bg-white'>
            <h1 className='font-bold text-2xl flex justify-center mt-20'>Digital Services</h1>
            <p className=' m-3 md:flex overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta nulla culpa? Ducimus nostrum error quas, aliquam unde cupiditate tempore?</p>
          </div>
          <div className='p-4 w-[300px] shadow-lg rounded-lg border-2 bg-white'>
            <h1 className='font-bold text-2xl flex justify-center mt-20'>Creative Idea</h1>
            <p className=' m-3 md:flex overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta nulla culpa? Ducimus nostrum error quas, aliquam unde cupiditate tempore?</p>
          </div>
          <div className='p-4 w-[300px] shadow-lg rounded-lg border-2 bg-white'>
            <h1 className='font-bold text-2xl flex justify-center mt-20'>Interior Design</h1>
            <p className=' m-3 md:flex overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta nulla culpa? Ducimus nostrum error quas, aliquam unde cupiditate tempore?</p>
          </div>
        </div>
        <div className="p-2  m-2  flex justify-evenly gap-3 bg-primary-color rounded-lg">
          <div className='p-4 w-[300px] shadow-lg rounded-lg border-2 bg-white'>
            <h1 className='font-bold text-2xl flex justify-center mt-20'>Online Services</h1>
            <p className=' m-3 md:flex overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta nulla culpa? Ducimus nostrum error quas, aliquam unde cupiditate tempore?</p>
          </div>
          <div className='p-4 w-[300px] shadow-lg rounded-lg border-2 bg-white'>
            <h1 className='font-bold text-2xl flex justify-center mt-20'>Unlimited Support</h1>
            <p className=' m-3 md:flex overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta nulla culpa? Ducimus nostrum error quas, aliquam unde cupiditate tempore?</p>
          </div>
          <div className='p-4 w-[300px] shadow-lg rounded-lg border-2 bg-white' >
            <h1 className='font-bold text-2xl flex justify-center mt-20'>Photography</h1>
            <p className=' m-3 md:flex overflow-hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti soluta nulla culpa? Ducimus nostrum error quas, aliquam unde cupiditate tempore?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services