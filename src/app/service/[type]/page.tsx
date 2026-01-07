'use client'

import React from 'react'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import { useParams } from 'next/navigation'
// service_parcel
import man from '../../../../public/man.png'
import service_parcel from '../../../../public/service_parcel.png'

const ServicePage: React.FC = () => {
  const params = useParams() as { type: string }
  const { type } = params


  // Determine heading based on service type
  const heading =
    type === 'Bike'
      ? 'Bike Taxi'
      : type === 'Auto'
        ? 'Auto Taxi'
        : type === 'Car'
          ? 'Car Taxi'
        : 'Parcel'
  return (
    <div className='bg-[#411B66]'>
      <First type={heading} />
      <Second type={heading}  />
      <Third type={heading} />
      <Fourth type={heading} />
    </div>
  )
}

export default ServicePage