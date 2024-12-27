import React from 'react'
import PrimaryBtn from './PrimaryBtn'

const Card = (props) => {
  return (
    <div className='h-[250px] w-[250px] shadow-lg border-2 flex flex-col justify-center items-center m-auto rounded-lg mt-4'>
      <div className='h-[140px] w-[140px] bg-blue-500  rounded-full gap 3'></div>
      <h1 className='mb-2 mt-2'>{props.text}</h1>
      <PrimaryBtn text="Explore"/>
    </div>

  )
}

export default Card
