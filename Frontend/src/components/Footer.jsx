import React from 'react'

function Footer() {
  return (
    <>  
      <div className='flex flex-wrap justify-between p-6 items-center  shadow-md border-2 m-4 pt-2 pb-2 rounded-lg '>
        <div className='p-4'>
         
            <h1 className='font-bold text-xl'>Imp Link</h1>
            <ul>
              <li><a href="#about-us" className='hover:underline hover:text-blue-700'>About Us</a></li>
              <li><a href="#careers" className='hover:underline hover:text-blue-700'>Careers</a></li>
              <li><a href="#partners" className='hover:underline hover:text-blue-700'>Partners</a></li>
              <li><a href="#sitemap" className='hover:underline hover:text-blue-700'>Sitemap</a></li>
          </ul>
          </div>
          <div>
            <h1 className='font-bold text-xl'>Policies</h1>
            <ul>
              <li><a href="#privacy-policy" className='hover:underline hover:text-blue-700'>Privacy Policy</a></li>
              <li><a href="#terms-and-conditions" className='hover:underline hover:text-blue-700'>Terms and Conditions</a></li>
              <li><a href="#refund-policy" className='hover:underline hover:text-blue-700'>Refund Policy</a></li>
              <li><a href="#cookie-policy" className='hover:underline hover:text-blue-700'>Cookie Policy</a></li>
            </ul>
        </div>
        <div className='p-4'>
            <h1 className='font-bold text-xl'>Services</h1>
            <ul>
              <li><a href="#services" className='hover:underline hover:text-blue-700'>Services</a></li>
              <li><a href="#service-areas" className='hover:underline hover:text-blue-700'>Service Areas</a></li>
              <li><a href="#how-it-works" className='hover:underline hover:text-blue-700'>How It Works</a></li>
              <li><a href="#faq" className='hover:underline hover:text-blue-700'>FAQ</a></li>
            </ul>
          </div>
          <div className='pt-4'>
            <h1 className='font-bold text-xl'>Social Media</h1>
            <ul>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:underline hover:text-blue-700'>Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:underline hover:text-blue-700'>Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:underline hover:text-blue-700'>Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:underline hover:text-blue-700'>LinkedIn</a></li>
            </ul>
        </div>
      </div>
        <div className='border-2 p-2 shadow-sm text-center m-4 rounded-lg'>
        <p className='text-center p-2'>Copyright © 2025 <span className='font-bold text-blue-700'><a href="/" className='hover:underline'>Sarvisso</a></span>. All Rights Reserved.</p>
        </div>
    </>
  )
}

export default Footer
