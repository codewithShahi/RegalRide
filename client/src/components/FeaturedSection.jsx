import React from 'react'
import Title from './Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from './CarCard'
import { useNavigate } from 'react-router-dom'

const FeaturedSection = () => {


    const navigate = useNavigate()


  return (
    <div className='flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'>
      
      <div>
        <Title title="Featured Vehicles" subTitle="Explore Our selection of Premium vehicles available for your next adventure" />
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:gird-cols-3 gap-8 mt-18 '>

        {
            dummyCarData.slice(0,6).map((car)=> (
                <div key={car._id}>
                    <CarCard car={car}/>
                </div>
            ))
        }

      </div>

      <button onClick={()=> {
        navigate('/cars'); scrollTo(0,0)
      }}
      className='flex items-center justify-centergap-2 px-6 py-2 border border-gray-300 hover:bg-gray-300 shadow-md hover:shadow-md rounded-md mt-18 cursor-pointer'>
        Explore all cars <img src={assets.arrow_icon} alt="arrow" className='pl-2 mt-1' />
      </button>
      
    </div>
  )
}

export default FeaturedSection
