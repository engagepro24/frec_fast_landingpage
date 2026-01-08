'use client'

import React from 'react'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './Fourth'
import { useParams } from 'next/navigation'


import service_bike from '../../../../public/service_bike.png'
import service_auto from '../../../../public/service_auto_imresizer.png'
import service_car from '../../../../public/service_car.png'
import service_parcel from '../../../../public/service_parcel.png'

// service_parcel
// import man from '../../../../public/man.png'
const ServicePage: React.FC = () => {
  const params = useParams() as { type: string }
  const { type } = params
const serviceMap: Record<string, { heading: string; image: any }> = {
    Bike: { heading: 'Bike Taxi', image: service_bike },
    Auto: { heading: 'Auto Taxi', image: service_auto },
    Car: { heading: 'Car Taxi', image: service_car },
    Parcel: { heading: 'Parcel Service', image: service_parcel },
  }
  const service = serviceMap[type] || serviceMap.Bike


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
      <Second type={service.heading} serviceImage={service.image} />
      <Third type={heading} />
      <Fourth type={heading} />
    </div>
  )
}

export default ServicePage