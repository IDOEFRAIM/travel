import React from 'react'
import DestinationsCard from '@/components/destinationsCard'

const page = () => {
  return (
    <div>
      <h1 className='text-5xl text-green-500'>Les cars qui demarent aujourd hui</h1>
      <div className="  grid sm:grid-cols-1  md:grid-cols-2 gap-4 justify-center items-center">
      <DestinationsCard/>
      <DestinationsCard/>
      <DestinationsCard/>
      <DestinationsCard/>
      <DestinationsCard/>
      <DestinationsCard/>

        </div>
    </div>
  )
}

export default page
