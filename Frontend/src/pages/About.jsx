import React from 'react';
import Carddetails from '../components/Carddetails';
import Shiva from '../assets/images/shiva.jpg';
import Pintu from '../assets/images/pintu.jpg';
import Anamika from '../assets/images/anamika.jpg';
import Neha from '../assets/images/neha.jpg';
import Abhi from '../assets/images/abhi.jpg';

const leadershipTeam = [
  {
    img: Shiva,
    name: 'Shivanand Kumar',
    subname: 'CEO & CTO',
    para: 'Shivanand oversees the overall direction of the company and makes strategic decisions. As the CTO, Shivanand is responsible for the technology roadmap, leading product development, and ensuring that the technical aspects of the business align with the company goals.',
    url: 'https://www.linkedin.com/in/shivanand-kumar-7a8924234',
  },
  {
    img: Pintu,
    name: 'Pintu Kumar Sharma',
    subname: 'CO-Founder & CTO',
    para: 'Pintu supports Shivanand in leading the technical development of the platform and ensures the technological infrastructure is robust. As Co-Founder, Pintu also contributes to the strategic growth of the company.',
    url: 'https://www.linkedin.com/in/pintu-kumar-sharma-b679a0246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    img: Abhi,
    name: 'Abhinash Gond',
    subname: 'COO & CTO',
    para: 'Abhinash handles the daily operations of the company and manages the operational side of things to ensure smooth execution. As a CTO, he also works on technology strategy, helping the company innovate and manage technical projects.',
    url: 'https://www.linkedin.com/in/abhinash-gond-6a4632292',
  },
  {
    img: Neha,
    name: 'Neha Saini',
    subname: 'CFO & CMO',
    para: 'Neha is responsible for the financial planning and strategy as CFO. As CMO, she focuses on the company marketing and communication strategies, ensuring that the platform is well-known and attractive to users.',
    url: 'https://www.linkedin.com/in/neha-saini-7b467b2a4',
  },
  {
    img: Anamika,
    name: 'Anamika Pandey',
    subname: 'CFO & CMO',
    para: 'Anamika manages the financial strategy, budgeting, and financial planning for the company. As the CMO, she is responsible for the marketing strategy, brand development, and promoting the platform to attract users and clients.',
    url: 'https://www.linkedin.com/in/anamika-pandey-413a42253',
  },
];

const stats = [
  { value: '500+', label: 'Trained Professionals' },
  { value: '120+', label: 'Happy Customers' },
  { value: '640', label: 'Cities' },
  { value: '1', label: 'Countries' },
];

const About = () => {
  return (
    <div className="container mx-auto px-4">
      {/* About Us Header */}
      <div className="flex justify-center items-center shadow-md border-2 rounded-lg font-bold text-3xl md:text-4xl mt-4 p-4 mx-2">
        <h1>About Us</h1>
      </div>

      {/* Who We Are Section */}
      <div className="flex flex-col items-center shadow-md border-2 mt-4 mx-2 rounded-lg p-4">
        <h1 className="text-2xl md:text-4xl font-bold text-center">Who We Are</h1>
        <p className="mt-5 text-sm md:text-base text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus quam inventore odit. Inventore cupiditate sed ullam ad aliquid exercitationem beatae facere aut ipsum.
        </p>
        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h1 className="font-bold text-xl md:text-3xl">{stat.value}</h1>
              <p className="text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Team Section */}
      <h1 className="font-bold text-xl md:text-2xl mt-8 text-center">Our Leadership Team</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 p-4">
        {leadershipTeam.map((leader, index) => (
          <Carddetails
            key={index}
            img={leader.img}
            name={leader.name}
            subname={leader.subname}
            para={leader.para}
            url={leader.url || '#'}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
