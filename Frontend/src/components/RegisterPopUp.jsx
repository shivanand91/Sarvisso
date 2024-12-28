import React from 'react';
import { IoClose } from "react-icons/io5";
import registerBg from '../assets/images/registerBG.png';
import PrimaryBtn from './PrimaryBtn';
import Secondary from '../components/Secondary';

const RegisterPopUp = (props) => {
  return (
    <div className="w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white h-[95vh] w-[95%] md:w-[80%] lg:w-[60%] xl:w-[85%] shadow-lg rounded-lg overflow-y-auto">
        
        {/* Close Button */}
        <IoClose
          onClick={props.onClose}
          className="absolute top-4 right-4 text-3xl text-black bg-white p-2 rounded-full hover:bg-black hover:text-white transition-all duration-300 cursor-pointer z-10"
        />

        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="h-full w-full md:w-1/2 flex flex-col justify-center items-center p-4">
            <h1 className="text-3xl md:text-5xl font-bold text-center">Sarvisso</h1>
            <div className="flex items-center justify-center gap-4 mt-6">
              <PrimaryBtn text="Customer" />
              <Secondary text="Employer" />
            </div>
            <div className="mt-8 px-4 w-full">
              <form className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-lg md:text-xl font-semibold text-center">Create an Account</h2>
                <input
                  type="tel"
                  placeholder="Enter your number"
                  className="border-2 w-full md:w-3/4 shadow-sm rounded-full px-4 py-2 text-sm md:text-base"
                />
                <Secondary text="Send" />
                <p className="text-sm md:text-base">-- or --</p>
                <button className="border-2 w-full md:w-3/4 py-2 shadow-sm rounded-full text-sm md:text-base">
                  Continue with Google
                </button>
                <button className="border-2 w-full md:w-3/4 py-2 shadow-sm rounded-full text-sm md:text-base">
                  Continue with Apple
                </button>
                <button className="border-2 w-full md:w-3/4 py-2 shadow-sm rounded-full text-sm md:text-base">
                  Continue with Email
                </button>
                <p className="text-sm md:text-base">
                  Already have an account?{' '}
                  <a href="#" className="text-blue-700 font-semibold">
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>

          {/* Right Section */}
          <div className="h-full w-full md:w-1/2 relative">
            <img
              src={registerBg}
              alt="Register Background"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPopUp;
