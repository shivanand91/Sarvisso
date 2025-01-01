import React, { useState } from 'react';
import logo from '../assets/images/logo2.png';
import PrimaryBtn from './PrimaryBtn';
import RegisterPopUp from './RegisterPopUp';
import { IoMenu, IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";


const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const [showRegister, setShowRegister] = useState(false); // State for Register Popup
  return (
    <div className="w-full shadow-md md:justify-between bg-primary-color md:top-0 md:left-0 py-4 px-3 md:flex md:items-center">
      <div
        onClick={() => setShowNav(!showNav)}
        className="text-4xl text-secondary-color md:hidden float-right flex cursor-pointer"
      >
        {showNav ? <IoClose /> : <IoMenu />}
      </div>
      <div className="flex">
        <img src={logo} alt="Sarvisso" className="w-10 " />
        <h1 className="text-white text-3xl font-bold ">Sarvisso</h1>
      </div>
      <ul
        className={`md:flex md:gap-8 md:pl-0 pl-4 text-white left-0 absolute md:static bg-primary-color w-full pb-6 items-center md:pb-0 md:w-auto transition-all duration-500 ease-in  ${showNav ? 'top-16 z-50' : 'top-[-290px] z-10'
          }`}
      >
        <li className='py-2'>
          <Link to={"/"}>Home</Link>
        </li>
        <li className='py-2'>
          <Link to={"/services"}>Services</Link>
        </li>
        <li className='py-2'>
          <Link>Products</Link>
        </li>
        <li className='py-2'>
          <Link to={"/about"}>About us</Link>
        </li>
        <li className='py-2'>
          <Link>Contact us</Link>
        </li>
        {
          loggedIn ? <Link to={"/profile"}>
            <div className='h-[40px] w-[40px] shadow-lg border rounded-full flex justify-center items-center text-3xl md:my-0 my-2'>
              <CgProfile />
            </div>
          </Link>
            : <div className="flex gap-1 pt-2">
            <PrimaryBtn text="Register" onClick={() => setShowRegister(true)} /> {/* Show Popup */}
            <p className="text-2xl text-white">-</p>
            <PrimaryBtn text="Login" onClick={() => setShowRegister(true)} />
          </div>
        }


      </ul >

      {/* Render RegisterPopUp */}
      {showRegister && <RegisterPopUp onClose={() => setShowRegister(false)} />}
    </div >
  );
};

export default Header;
