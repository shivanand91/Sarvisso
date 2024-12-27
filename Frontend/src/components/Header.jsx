import React, { useState } from 'react';
import logo from '../assets/images/logo1.png';
import PrimaryBtn from './PrimaryBtn';
import { IoMenu } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const [showNav, SetShowNav] = useState(false);
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/' },
    { name: 'Products', link: '/' },
    { name: 'How it Works?', link: '/' },
    { name: 'Shorts', link: '/' },
    { name: 'About us', link: '/' },
  ];
  
  return (
    <div className='w-full shadow-md md:justify-between bg-primary-color md:top-0 md:left-0 py-4 px-3 md:flex md:items-center'>
      <div
        onClick={() => SetShowNav(!showNav)}
        className='text-4xl text-secondary-color md:hidden float-right flex cursor-pointer'
      >
        {showNav ? <IoClose /> : <IoMenu />}
      </div>
      <div className='flex'>
        <img src={logo} alt='Sarvisso' className='w-10 z-10 ' />
        <h1 className='text-white text-3xl font-bold z-10'>Sarvisso</h1>
      </div>
      <ul
        className={`md:flex md:gap-8 md:pl-0 pl-4 absolute md:static bg-primary-color  left-0 w-full pb-6 items-center md:pb-0 md:w-auto transition-all duration-500 ease-in ${
          showNav ? 'top-16 z-50' : 'top-[-290px] z-10'
        }`}
      >
        {Links.map((Link, index) => (
          <li key={index} className='md:pt-0 pt-4 cursor-pointer'>
            <a href={Link.link} className='text-md text-white'>
              {Link.name}
            </a>
          </li>
        ))}
        <div className='flex gap-1 pt-2'>
          <PrimaryBtn text='Register' />
          <p className='text-2xl text-white'>-</p>
          <PrimaryBtn text='Login' />
        </div>
      </ul>
    </div>
  );
};

export default Header;
