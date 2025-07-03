import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 min:pl-14 pt-10 bg-gradient-to-r
    from-[#0558FE] to-[#a9bee9] max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>

        <div className='text-white'>
            <h2 className='text-3xl font-medium'>DO you Own a luxury Car?</h2>
            <p className='mt-2'>Monetize your vehicle effortlessly by listing it on RegalRide.</p>
            <p className='max-w-130'>WE take care of insurance, driver verification and secure payments - so you can earn passive income, stress-free.</p>

            <button className='px-6 py-2 bg-white hover:bg-slate-200 transition-all
            text-blue-600  rounded-lg text-sm font-semibold  mt-8 cursor-pointer'>List your car</button>
        </div>

        <img src={assets.banner_car_image} alt="car" className='max-h-45 mt-10' />
      
    </div>
  )
}

export default Banner
