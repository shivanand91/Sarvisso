import React from 'react'

const Works = () => {
  return (
    <div className=' border-2 m-4 pb-10 pt-4 rounded-lg shadow-lg'>
      <h1 className='text-center font-bold mb-4 mt-2 text-5xl'>How It Works</h1>
      <div className='flex justify-center flex-wrap gap-4 items-center'>

        <div className="border p-4 rounded-lg shadow-md hover:bg-secondary-color">
            <h3 className="font-bold text-lg text-black mb-4">For Employers</h3>
            <ol className="space-y-3">
              <li><span className="font-bold">Sign Up:</span> Create your account and fill in your profile.</li>
              <li><span className="font-bold">List Your Services:</span> Add detailed descriptions of your services, expertise, and pricing.</li>
              <li><span className="font-bold">Get Discovered:</span> Potential customers will find you on the platform.</li>
              <li><span className="font-bold">Accept Jobs:</span> Accept job requests based on your availability.</li>
              <li><span className="font-bold">Complete and Get Paid:</span> Finish the job and receive secure payments.</li>
            </ol>
          </div>
        
        <div className="border p-4 rounded-lg shadow-md  hover:bg-secondary-color">
            <h3 className="font-bold text-lg text-black mb-4">For Customers</h3>
            <ol className="space-y-3">
              <li><span className="font-bold">Sign Up:</span> Register and log in to the platform.</li>
              <li><span className="font-bold">Search for Services:</span> Browse services like plumbing, cleaning, etc.</li>
              <li><span className="font-bold">View Profiles:</span> Check out service provider profiles with reviews, skills, and pricing.</li>
              <li><span className="font-bold">Hire and Connect:</span> Choose the right provider and contact them directly.</li>
              <li><span className="font-bold">Pay Securely:</span> Make secure payments after the job is completed.</li>
            </ol>
          </div>
      </div>
      <div>
        
      </div>
    </div>
    
  )
}

export default Works
