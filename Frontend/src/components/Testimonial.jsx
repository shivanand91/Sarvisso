import React from 'react'
import { BsStarFill } from "react-icons/bs";

const Testimonial = () => {
    return (
        <div className='flex  flex-col shadow-md border-2 m-4 pt-2 pb-2 rounded-lg px-6'>
            <h1 className='text-center font-bold mb-4 mt-4 text-5xl '>Testimonial</h1>
            <div className='flex flex-col'>

                <h1 className='font-bold text-4xl ml-20'>**⭐⭐⭐⭐⭐ Excellent Service!**</h1>
                <div className='md:flex  md:justify-around'>
                    <div className=' w-[700px] gap-2 '>
                        <p className='text-4xl '>

                            Mujhe jo sabse accha laga, woh yeh tha ki har
                            professional ka detailed profile aur rating system hai,
                            jo decision-making mein madad karta hai.
                            Service quality bhi top-notch thi,
                            aur kaam bilkul time par ho gaya.Great job!

                        </p>
                    </div>

                    <div className='h-[240px] w-[240px] gap-3 z-50 border-2 shadow-2xl rounded-md pb-4'></div>

                </div>

            </div>
        </div>
    )
}

export default Testimonial
