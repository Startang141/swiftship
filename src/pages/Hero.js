import React from 'react'

import truck from '../assets/truck.svg'
import ilus from '../assets/ilus.svg'

function Hero() {
  return (
    <div className='md:grid md:grid-cols-2'>
        {/*Text for hero*/}
        <div className='mt-8 md:mt-28'>
        <h2 className='text-white font-bold text-3xl sm:w-2/3 md:w-[88%] md:text-4xl md:text-white md:leading-normal'>Revolutionizing The Way You Ship, With Speed And Precision</h2>
        <p className='text-zinc-600 leading-4 mt-4 sm:w-2/3 md:w-[90%] text-base md:mt-6 md:mb-14 md:leading-normal'>We offer fast, reliable, and secure delivery services for packages of all sizes, anywhere in the world.</p>
        <div className='mt-12 md:flex'>
        <button className='bg-[#3757FF] text-white px-5 py-2 rounded-lg w-full md:w-fit md:rounded-full'>Request a Pickup</button>
        <div className='flex bg-[#1A1A1A] rounded-full px-2 py-2 w-full justify-center mt-2 md:w-fit md:ml-6'>
            <img src={truck} alt='logo truck'></img>
            <p className='text-white ml-2'>Track Shipment</p>
        </div>
        </div>
        </div>
        {/*Ilus for hero*/}
        <div>
            <img src={ilus} alt='ilustration' className='mt-7'></img>
        </div>
    </div>
  )
}

export default Hero