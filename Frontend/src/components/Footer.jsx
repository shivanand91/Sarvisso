import React from 'react'

function Footer() {
  return (
    <div className='flex  flex-col shadow-md border-2 m-4 pt-2 pb-2 rounded-lg px-6'>
      <div className='flex justify-between items-center pb-4 px-4'>
        <div>
          <h1 className='font-bold text-3xl'>
            Company Information
          </h1>
          <ul>
            <li> About Us</li>
            <li> Careers</li>
            <li>Partners</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div>
          <h1 className='font-bold text-3xl'>
            Policies
          </h1>
          <ul>
            <li>  Privacy Policy</li>
            <li> Terms and Conditions</li>
            <li>Refund and Cancellation Policy</li>
            <li>Cookie Policy </li>
          </ul>
        </div>
      </div>
      <div className='flex justify-between items-center pb-4 px-4'>
        <div>
          <h1 className='font-bold text-3xl'>Services
          </h1>
          <ul>
            <li>Services</li>
            <li>Service Areas</li>
            <li>How It Works</li>
            <li> FAQ </li>
            </ul>
        </div>
        <div>
          <h1 className='font-bold text-3xl'>Social Media 
          </h1>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className='flex justify-center items-center shadow-md border-2 ml-1 mr-1 pt-2 pb-2 rounded-lg font-bold text-4xl'>
        <p>© 2025 Sarvisso. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer