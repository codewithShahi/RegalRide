import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

  const [pickupLocation, setPickupLocation] = useState('')
  return (
    <div className='h-screen flex flex-col items-center justfiy-center gap-14 bg-light text-center'>
      
      <h1 className='text-4xl md:text-5xl pt-25 font-semibold'>Ride Smart Ride Regal</h1>

      <form className='flex flex-col md:flex-row items-start md:items-center
      justify-between p-6 rounded-lg md:rounded-full w-full max-w-80 md:max-w-200 
      bg-gray-200 shadow-[0px_8px_20px_rgba(0,0,0,0.4)]'>

        <div className='flex flex-col md:flex-row items-start md:items-center gap-10 min:ml-8'>

        <div className='flex flex-col items-start gap-2 border-none'>
            <select required value={pickupLocation} onChange={(e)=>setPickupLocation(e.target.value)} className='outline-none'>
                <option value="" >Pickup Location</option >
                {cityList.map((city)=> <option key={city} value={city}>{city} </option>)}
            </select>
            <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : 'Please Select location'}</p>
            
        </div>
        <div className='flex flex-col items-start gap-2 border-none'>
           <label htmlFor="pickup-date">Pick-up Date</label>
           <input type="date" id="pickup-date" min={new Date().toISOString().split('T')[0]} className='text-sm text-gray-500' required/>
            
        </div>
        <div className='flex flex-col items-start gap-2 border-none'>
           <label htmlFor="return-date">Return Date</label>
           <input type="date" id="return-date" className='text-sm text-gray-500' required/>  
        </div>
        <button className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4 bg-primary hover:bg-primary-dull text-white 
        rounded-full cursor-pointer'>
          <img src={assets.search_icon} alt="search" className='brightness-300' />

          Search
        </button>

        </div>
        
      </form>

      <img src={assets.main_car}alt="car" className='max-h-74' />
    </div>
  )
}

export default Hero
