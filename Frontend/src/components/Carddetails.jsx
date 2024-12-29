import React from 'react';
import Secondary from '../components/Secondary';
import { FaLinkedin } from 'react-icons/fa';

const Carddetails = (props) => {
    return (
        <div className="w-full sm:w-80 md:w-96 border-2 shadow-lg mt-4 rounded-lg flex items-center flex-col p-4 h-auto min-h-[400px]">
            {/* Image Section */}
            <div className="h-32 w-32 sm:h-40 sm:w-40 border-2 shadow-lg rounded-full mt-4 overflow-hidden">
                <img
                    className="rounded-full w-full h-full object-cover"
                    src={props.img}
                    alt={`${props.name}'s profile`}
                />
            </div>

            {/* Name and Title */}
            <h1 className="font-bold text-xl sm:text-2xl mt-2 text-center">{props.name}</h1>
            <h3 className="font-semibold mb-2 text-center">{props.subname}</h3>

            {/* Description */}
            <p className="text-center text-sm sm:text-base px-2 line-clamp-5 max-w-prose">
                {props.para}
            </p>

            {/* LinkedIn Button */}
            <div className='mt-4'>
                <a
                    className="mt-3 text-white  gap-2 text-sm sm:text-base"
                    href={props.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Secondary text="LinkedIn" />
                </a>
            </div>
        </div>
    );
};

export default Carddetails;
