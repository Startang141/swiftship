import React from 'react'

function Feature() {
  return (
    <div className='bg-[#3757FF] rounded-tl-2xl rounded-tr-2xl px-6 py-4 divide-slate-400 md:grid md:grid-cols-3 md:px-12 md:py-4 md:gap-2'>
        <div className='mt-5'>
            <h4 className='font-semibold text-white'>Fast Delivery</h4>
            <p className='text-slate-400 text-sm mt-3 md:w-[90%]'>We understand that time is of the essence when it comes to shipping. That's why we offer fast delivery options for packages of all sizes, anywhere in the world.</p>
        </div>
        <div className='mt-5'>
            <h4 className='font-semibold text-white'>Reliable Service</h4>
            <p className='text-slate-400 text-sm mt-3 md:w-[87%]'>We pride ourselves on our reliability. We have a team of professionals who are dedicated to ensuring that your packages are delivered on time.</p>
        </div>
        <div className='mt-5'>
            <h4 className='font-semibold text-white'>Secure Shipping</h4>
            <p className='text-slate-400 text-sm mt-3 md:w-[85%]'>We use advanced tracking technology and secure handling techniques to ensure that your packages are delivered safely and securely.</p>
        </div>
    </div>
  )
}

export default Feature