import React from 'react'
import { IoClose } from "react-icons/io5";
import registerBg from '../assets/images/registerBG.png'
import PrimaryBtn from './PrimaryBtn';
import Secondary from '../components/Secondary'

const RegisterPopUp = (props) => {
    return (
        <div className='w-full h-full fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50'>
            <div className='bg-white h-[95vh] w-[1100px] shadow-lg rounded-lg flex items-center justify-between '>
                <div className='h-full w-[540px] flex flex-col justify-center items-center'>
                    <h1 className='text-6xl font-bold '>Sarvisso</h1>
                    <div className='flex items-center justify-center gap-8 mt-8'>
                        <PrimaryBtn text='Customer' />
                        <Secondary text='Employers' />
                    </div>
                    <div className='p-4  ml-4'>
                        <form action="" className='flex flex-col justify-center items-center gap-2'>
                            <h1>Create an Account</h1>
                            <input type="tel" placeholder='Enter your number' className='border-2 w-[300px] shadow-sm rounded-full px-3 py-2'/>
                            <Secondary text='Send'/>
                            <p>-- or -- </p>
                            <button className='border-2 w-[300px] py-2 shadow-sm rounded-full'>Continue with Google</button>
                            <button className='border-2 w-[300px] py-2 shadow-sm rounded-full'>Continue with Apple</button>
                            <button className='border-2 w-[300px] py-2 shadow-sm rounded-full'>Continue with Email</button>
                            <p>Already have an account? <a href='#' className='text-blue-700 font-semibold' >Login</a></p>


                        </form>
                    </div>
                </div>
                <div className='h-full w-[540px] relative flex flex-col justify-center items-center'>
                    <IoClose onClick={props.onClose} className='text-5xl top-2 right-2 absolute bg-white p-2 rounded-full hover:bg-black hover:text-white transition-all duration-70 ease-in' />
                    <div className='w-full h-full bg-black rounded-lg'>
                        <img src={registerBg} alt="" className='w-full h-full bg-cover rounded-r-lg ' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterPopUp