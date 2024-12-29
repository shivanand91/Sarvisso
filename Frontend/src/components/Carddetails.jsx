import React from 'react'
import Secondary from '../components/Secondary'
import { FaLinkedin } from "react-icons/fa";


const Carddetails = (props) => {
    return (
        <div className=' w-96 border-2 shadow-lg mt-4 rounded-lg flex items-center flex-col p-4'>
            <div className='h-40 w-40 border-2 shadow-lg rounded-full mt-4'>
                <img className='rounded-full w-38' src={props.img} alt="" />
            </div>
            <h1 className='font-bold text-2xl mt-2'>{props.name}</h1>
            <h3 className='font-semibold mb-2 '>{props.subname}</h3>
            <p className='text-center '>{props.para} </p>
            <a className='mt-3 text-white' href={props.url} target='_blank'>
                < FaLinkedin />
                <Secondary text='Linkdin'/>
            </a>
        </div>
    )
}

export default Carddetails
