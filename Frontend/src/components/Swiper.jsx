// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import interior from '../assets/images/interior.jpeg';
import carpenting from '../assets/images/carpenting.jpg';
import plumbing from '../assets/images/plumbing.jpg';
import PrimaryBtn from './PrimaryBtn';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className='h-[500px] w-full cursor-pointer flex justify-center items-center bg-black z-10'
    >
      <SwiperSlide className='w-full h-full flex justify-center items-center relative'>
        {/* Background Image */}
        <div className='w-full h-full opacity-70 bg-cover'>
          <img src={interior} alt="Interior" className='w-full h-full object-cover' />
        </div>

        {/* Overlay Text */}
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 text-white text-center px-4 pt-36'>
          <h1 className='text-4xl font-bold mb-4'>All Your Home Needs, One Platform!</h1>
          <h3 className='text-xl mb-6'>From plumbing to painting, we’ve got you covered.</h3>
          <PrimaryBtn text="Book" />
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-full h-full flex justify-center items-center relative'>
        {/* Background Image */}
        <div className='w-full h-full opacity-80 bg-cover'>
          <img src={carpenting} alt="Interior" className='w-full h-full object-cover' />
        </div>

        {/* Overlay Text */}
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 text-white text-center px-4 pt-36'>
          <h1 className='text-4xl font-bold mb-4'>Expert Services at Your Doorstep</h1>
          <h3 className='text-xl mb-6'>Affordable, reliable, and quick solutions for every home.</h3>
          <PrimaryBtn text="Explore Services" />
        </div>
      </SwiperSlide>
      <SwiperSlide className='w-full h-full flex justify-center items-center relative'>
        {/* Background Image */}
        <div className='w-full h-full opacity-60 bg-cover'>
          <img src={plumbing} alt="Interior" className='w-full h-full object-cover' />
        </div>

        {/* Overlay Text */}
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 text-white text-center px-4 pt-36'>
          <h1 className='text-4xl font-bold mb-4'>Transform Your Space with Ease</h1>
          <h3 className='text-xl mb-6'>Gardening, renovations, and more - tailored to your needs.</h3>
          <PrimaryBtn text="Shorts" />
        </div>
      </SwiperSlide>
      ....
    </Swiper>
  );
};