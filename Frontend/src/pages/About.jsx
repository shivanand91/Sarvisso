import React from 'react'
import Carddetails from '../components/Carddetails'
import Shiva from '../assets/images/shiva.jpg'
import Pintu from '../assets/images/pintu.jpg'
import Anamika from '../assets/images/anamika.jpg'
import Neha from '../assets/images/neha.jpg'
import Abhi from '../assets/images/abhi.jpg'


const About = () => {
  return (
    <div>
      <div className='flex justify-center items-center shadow-md border-2 rounded-lg font-bold text-4xl mt-4 p-4 ml-2 mr-2'><h1>About Us</h1></div>
      <div className='flex justify-center flex-col items-center shadow-md border-2 mt-4 ml-2 mr-2  rounded-lg  p-4'><h1 className=' text-4xl font-bold'>Who We Are</h1>
        <p className='mt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non doloribus quam inventore odit. Inventore cupiditate sed ullam ad aliquid exercitationem beatae facere aut ipsum, ex corporis quod perspiciatis at recusandae!
          Harum molestiae eum voluptatum numquam enim cum aspernatur. Aliquam iure ea facere commodi possimus molestiae suscipit expedita, in provident. Ea vero magni doloribus, doloremque excepturi ipsum quas suscipit esse omnis?
          Corporis dolorum rerum veniam necessitatibus mollitia voluptatum asperiores voluptate magni illum deleniti tempora voluptatibus, ullam modi et officiis praesentium pariatur non aperiam eum beatae! Eum iste assumenda quam explicabo voluptas.
          Tempora eveniet doloribus, excepturi optio aspernatur reprehenderit? Maiores at magnam perferendis voluptate nesciunt totam voluptatem est similique blanditiis, qui enim nostrum fuga tenetur. Animi nostrum recusandae voluptatem architecto, labore assumenda!

        </p>
        <div className='flex justify-center items-center flex-col'> <h1 className=' mt-10 font-bold text-3xl'>50,000+

        </h1>
          <p className='mt-1'>Trained Professionals</p></div>
        <div className='flex justify-center items-center flex-col'>
          <h1 className=' mt-10 font-bold text-3xl'>12 Million+

          </h1>
          <p className='mt-1'>happy customers</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <h1 className=' mt-10 font-bold text-3xl'>60

          </h1>
          <p className='mt-1'>Cities</p>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <h1 className=' mt-10 font-bold text-3xl'> 4

          </h1>
          <p className='mt-1'>Countries</p>
        </div>

      </div>
      <h1 className=' font-bold text-2xl mt-8 text-center'>Our Leadership Team</h1>
      <div className='flex flex-wrap justify-center items-center p-4 gap-4'>

        <Carddetails img={Shiva} name='Shivanand Kumar' subname='CEO & CTO' para=' Shivanand oversees the overall direction of the company and makes strategic decisions. As the CTO, Shivanand is responsible for the technology roadmap, leading product development, and ensuring that the technical aspects of the business align with the company goals' url="https://www.linkedin.com/in/shivanand-kumar-7a8924234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"/>
        <Carddetails img={Pintu} name='Pintu Kumar Sharma' subname='CO-founder & CTO' para='Pintu supports Shivanand in leading the technical development of the platform and ensures the technological infrastructure is robust. As Co-Founder, Pintu also contributes to the strategic growth of the company.' url=""/>
        <Carddetails img={Abhi} name='Abhinash Gond' subname='COO & CTO' para='Abhinash handles the daily operations of the company and manages the operational side of things to ensure smooth execution. As a CTO, he also works on technology strategy, helping the company innovate and manage technical projects.' url="https://www.linkedin.com/in/abhinash-gond-6a4632292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"/>
        <Carddetails img={Neha} name='Neha' subname='CFO & CMO' para=' Neha is responsible for the financial planning and strategy as CFO. As CMO, she focuses on the company marketing and communication strategies, ensuring that the platform is well-known and attractive to users' url="https://www.linkedin.com/in/neha-saini-7b467b2a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
        <Carddetails img={Anamika} name='Anamika Pandey' subname='CFO & CMO' para=' Anamika manages the financial strategy, budgeting, and financial planning for the company. As the CMO, she is responsible the marketing strategy, brand development, and promoting the platform to attract users and clients.' url="https://www.linkedin.com/in/anamika-pandey-413a42253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />

      </div>
    </div>
  )
}

export default About