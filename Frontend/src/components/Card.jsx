import React from 'react';
import PrimaryBtn from './PrimaryBtn';

const Card = (props) => {
  return (
    <div className='h-[250px] w-[250px] shadow-lg border-2 flex flex-col justify-center items-center m-auto rounded-lg mt-4 relative bg-black overflow-hidden'>
      <div className='h-[140px] w-[140px] rounded-full gap-3 z-50 border-2 shadow-2xl'></div>
      <h1 className='mb-2 mt-2 z-50 text-3xl font-bold text-white'>{props.text}</h1>
      <div className='z-50'>
        <PrimaryBtn text="Explore" />
      </div>
      <img
        src={props.img}
        alt="bg-image"
        className='h-full w-full absolute top-0 left-0 z-10 rounded-md opacity-70 hover:blur-sm'
      />
    </div>
  );
};

export default Card;
